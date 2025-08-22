import React, { useEffect, useState } from "react";
import { getMembers } from "../connectAPI/callMember";

function MemberList() {
  const [Members, setMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      const data = await getMembers();
      setMembers(data);
    } catch (err) {
      console.error("โหลดข้อมูลล้มเหลว:", err);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div>
      <h2> รายชื่อผู้ใช้</h2>
      {Members.map((member) => (
        <div key={member.memid}>
          {member.memid} {member.name}
        </div>

      ))}

    </div>
  );
}

export default MemberList;

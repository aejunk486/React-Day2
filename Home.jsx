import { Link, useNavigate  } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ยินดีต้อนรับสู่หน้า HomePage</h1>
      <p>หน้านี้จะไม่แสดงเมนูนำทาง (nav)</p>

      {/* แบบลิงก์ */}
      <p>
        <Link to="/memberListpage">ไปที่หน้าข้อมูลสมาชิก</Link>
      </p>

      {/* แบบปุ่มใช้ navigate */}
      <button onClick={() => navigate("/memberListpage")}>
        ไปหน้า MemberList (ด้วยปุ่ม)
      </button>
    </div>
  );
}

export default HomePage;

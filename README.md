# discord-bot

โปรเจกต์บอท Discord สำหรับ **ยืนยันตัวตน (Verify)** ด้วยปุ่ม พร้อมระบบมอบบทบาทอัตโนมัติ  
สร้างด้วย [discord.js v14](https://discord.js.org) และใช้ `.env` ในการจัดการ Token และค่า config ต่าง ๆ

---

## คุณสมบัติหลัก

- ฟังคำสั่ง `/embed` เพื่อส่งข้อความ Embed พร้อมปุ่ม Verify  
- เมื่อผู้ใช้กดปุ่ม Verify จะได้รับบทบาทอัตโนมัติหลังรอ 3 วินาที  
- แจ้ง Log การมอบบทบาทในแชนแนลที่กำหนด  
- ตรวจสอบสิทธิ์เฉพาะผู้มี Administrator ใช้งานคำสั่งได้  
- Token และค่า config ถูกเก็บใน `.env` ปลอดภัยไม่รั่วไหล

---

## วิธีติดตั้ง

### 1. โคลนโปรเจกต์
```bash
git clone https://github.com/your-username/discord-bot.git
cd discord-bot
```
### 2. ติดตั้ง dependencies
```bash
npm install
```
### 3. สร้างไฟล์ .env
```bash
TOKEN=ใส่_Token_บอท_ของคุณ_ที่_Developer_Portal
ROLE_ID=รหัสบทบาทที่จะมอบให้ผู้ใช้
LOG_VERIFY=รหัสแชนแนลที่บอทจะส่งข้อความแจ้งเตือน
```
4. รันบอท
```bash
node index.js
```


# React Chat UI - Qiscus Intern Test

# English
A simple demo of a chat UI rendering data from dummy JSON (text, image, video, pdf). Built with **React + Vite** and **Tailwind CSS**.

## 🚀 Live Demo
- https://react-chat-app-qlct.vercel.app/

## 📦 Tech
- React + Vite
- Tailwind CSS v4

## 🗂 Data Structure
- Data source: `public/chat_room_extended.json`
- Schema follows the ERD. Message types: `text | image | video | pdf`.

## 📸 Preview

### Diagram
![Diagram](https://github.com/user-attachments/assets/f78a3ee3-f37c-49c4-82a4-0a38823eb848)

**Diagram Explanation:**
- **User → React Chat UI (Open App)**: Represents the user opening the React-based chat application.  
- **React Chat UI ↔ chat_room_extended.json (Fetch Data)**: Dummy JSON file is used as the main data source (rooms, participants, comments).  
- **React Chat UI → Message List & Media Preview (Render View)**: The UI renders messages including text, images, videos, and PDFs.  
- **User → Local State (Send Mock)**: Since there is no backend, sending a message is only simulated and stored in local state.  

---

### ERD
![ERD](https://github.com/user-attachments/assets/631a7fca-36fb-4947-9e7a-2ea0a2b22e12)

**ERD Explanation:**
- **USER**: Email as the primary ID. `avatar_url`, `global_role`, and `created_at` are optional.  
- **ROOM**: Stores chat room information. `is_group` and `created_at` are optional.  
- **ROOM_PARTICIPANT**: Maps users within a room, with `role_in_room` (0=Admin, 1=Agent, 2=Customer).  
- **MESSAGE**: Stores messages. Optional fields: `text` (only for type=text), `caption` (image/video/pdf), `reply_to_message_id`, `edited`, `deleted_at`, `created_at`.  
- **MESSAGE_MEDIA**: Stores media details. Optional fields: `thumb_url`, `width`/`height` (image/video), `duration_sec` (video), `pages`/`filename` (pdf).  

---

## ▶️ Run Locally
```bash
npm install
npm run dev
```
------

# Bahasa Indonesia
Demo sederhana chat UI yang merender data dari dummy JSON (text, image, video, pdf). Dibuat dengan **React + Vite** dan **Tailwind CSS**.

## 🚀 Live Demo
- https://react-chat-app-qlct.vercel.app/

## 📦 Tech
- React + Vite
- Tailwind CSS v4

## 🗂 Struktur Data
- Sumber data: `public/chat_room_extended.json`
- Skema field mengikuti ERD. Tipe pesan: `text | image | video | pdf`.

## 📸 Preview

### Diagram
![Diagram](https://github.com/user-attachments/assets/f78a3ee3-f37c-49c4-82a4-0a38823eb848)

**Penjelasan Diagram:**
- **User → React Chat UI (Open App)**: Menggambarkan alur user membuka aplikasi chat berbasis React.  
- **React Chat UI ↔ chat_room_extended.json (Fetch Data)**: Data dummy JSON digunakan sebagai sumber utama (rooms, participants, comments).  
- **React Chat UI → Message List & Media Preview (Render View)**: UI merender pesan, termasuk teks, gambar, video, PDF.  
- **User → Local State (Send Mock)**: Karena tidak ada backend, aksi kirim pesan hanya disimulasikan dengan penyimpanan ke local state.  

---

### ERD
![ERD](https://github.com/user-attachments/assets/631a7fca-36fb-4947-9e7a-2ea0a2b22e12)

**Penjelasan ERD:**
- **USER**: Email sebagai ID. `avatar_url`, `global_role`, `created_at` opsional.  
- **ROOM**: Menyimpan info ruang chat. `is_group`, `created_at` opsional.  
- **ROOM_PARTICIPANT**: Mapping user dalam room, dengan `role_in_room` (0=Admin, 1=Agent, 2=Customer).  
- **MESSAGE**: Menyimpan pesan. Field opsional: `text` (hanya type=text), `caption` (image/video/pdf), `reply_to_message_id`, `edited`, `deleted_at`, `created_at`.  
- **MESSAGE_MEDIA**: Menyimpan detail media. Field opsional: `thumb_url`, `width`/`height` (image/video), `duration_sec` (video), `pages`/`filename` (pdf).  

---

## ▶️ Menjalankan Local
```bash
npm install
npm run dev

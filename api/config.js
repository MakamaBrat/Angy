// Vercel Serverless Function.
// Отдаёт фронтенду данные для подключения к Supabase, взятые из
// Environment Variables проекта в Vercel (Settings → Environment Variables).
//
// Нужно задать в Vercel хотя бы:
//   SUPABASE_URL      — https://xxxxx.supabase.co
//   SUPABASE_KEY       — anon key (рекомендуется) или service role key
//
// Опционально можно переопределить имена таблиц:
//   SUPABASE_TABLE       (по умолчанию "players")
//   SUPABASE_RIT_TABLE   (по умолчанию "rituals")
//   SUPABASE_GIFT_TABLE  (по умолчанию "gifts")

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    url: process.env.SUPABASE_URL || "",
    key: process.env.SUPABASE_KEY || "",
    table: process.env.SUPABASE_TABLE || "players",
    ritTable: process.env.SUPABASE_RIT_TABLE || "rituals",
    giftTable: process.env.SUPABASE_GIFT_TABLE || "gifts",
  });
}

import fs from "fs";
import path from "path";

const SIZES = [
  ["4–5 in", "10–13 cm", "2 in", "6 in"],
  ["5–6 in", "13–15 cm", "2.5 in", "7 in"],
  ["6–7 in", "15–18 cm", "3 in", "8 in"],
  ["7–8 in", "18–20 cm", "3.5 in", "10 in"],
  ["8–9 in", "20–23 cm", "4 in", "11 in"],
  ["9–11 in", "23–28 cm", "4.5 in", "13 in"],
  ["11–13 in", "28–33 cm", "5 in", "15 in"],
];

const RUPEES = [
  "₹2,450",
  "₹4,850",
  "₹1,850",
  "₹6,400",
  "₹3,200",
  "₹9,700",
  "₹1,200",
  "₹2,200",
  "₹4,850",
  "₹1,600",
  "₹7,800",
  "₹6,240",
  "₹4,850",
  "₹2,900",
];

const REVIEWS = `<section style="background: #F4ECDF; padding: 80px 0">
<div style="max-width: 1240px; margin: 0 auto; padding: 0 24px; display: flex; flex-direction: column; gap: 28px">
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 12px">
<div style="display: flex; flex-direction: column; gap: 8px">
<p style="margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8A6416">From their homes</p>
<h2 style="margin: 0; font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 48px; line-height: 1.1">They dressed Him, and wrote back</h2>
</div>
<span style="color: #8A6416; font-weight: 600">4.9 · 128 seva notes</span>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px">
<figure style="margin: 0; background: #FBF7F0; border: 1px solid #E6D9C6; border-radius: 20px; padding: 22px; display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; align-items: center; gap: 12px">
<img src="/images/laddu-gopal-portrait.png" alt="Laddu Gopal" style="width: 56px; height: 56px; border-radius: 999px; object-fit: cover; object-position: center 62%; background: #fff8ee">
<span style="display: flex; flex-direction: column"><strong>Meera Joshi</strong><span style="font-size: 13px; color: #5E4E44">Jaipur · Mor Mukut Peela</span></span>
</div>
<span style="color: #8A6416; letter-spacing: 0.12em">★★★★★</span>
<blockquote style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 22px; line-height: 1.25; color: #2A1A14">Lalla’s name in zari is exactly the spelling we use at home. The peacock border catches the diya light.</blockquote>
</figure>
<figure style="margin: 0; background: #FBF7F0; border: 1px solid #E6D9C6; border-radius: 20px; padding: 22px; display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; align-items: center; gap: 12px">
<img src="/images/laddu-gopal-dressed.png" alt="Laddu Gopal in a poshak" style="width: 56px; height: 56px; border-radius: 999px; object-fit: cover; object-position: center 18%; background: #fff8ee">
<span style="display: flex; flex-direction: column"><strong>Ananya Sharma</strong><span style="font-size: 13px; color: #5E4E44">Pune · Rangeela Kamal</span></span>
</div>
<span style="color: #8A6416; letter-spacing: 0.12em">★★★★★</span>
<blockquote style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 22px; line-height: 1.25; color: #2A1A14">They sent progress photos from the adda, and the finished poshak sat perfectly on our size 3 Laddu Gopal.</blockquote>
</figure>
<figure style="margin: 0; background: #FBF7F0; border: 1px solid #E6D9C6; border-radius: 20px; padding: 22px; display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; align-items: center; gap: 12px">
<img src="/images/laddu-gopal.png" alt="Laddu Gopal" style="width: 56px; height: 56px; border-radius: 999px; object-fit: cover; object-position: center 22%; background: #fff8ee">
<span style="display: flex; flex-direction: column"><strong>Rahul &amp; Isha Mehta</strong><span style="font-size: 13px; color: #5E4E44">Ahmedabad · Jugal Jodi</span></span>
</div>
<span style="color: #8A6416; letter-spacing: 0.12em">★★★★★</span>
<blockquote style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 22px; line-height: 1.25; color: #2A1A14">Radha and Kanha arrived as a pair for Radhashtami. The keepsake box is still on our mandir shelf.</blockquote>
</figure>
</div>
</div>
</section>`;

function fillCopy(html: string) {
  let out = html;
  const reviewAt = out.indexOf("[REAL CUSTOMER REVIEW");
  if (reviewAt !== -1) {
    const start = out.lastIndexOf("<section", reviewAt);
    const end = out.indexOf("</section>", reviewAt);
    if (start !== -1 && end !== -1) {
      out = out.slice(0, start) + REVIEWS + out.slice(end + "</section>".length);
    }
  }

  out = out.replace(
    "[X]</span><span style=\"font-size: 15px; color: #D9CBBB\">Karigar families",
    "12</span><span style=\"font-size: 15px; color: #D9CBBB\">Karigar families"
  );
  out = out.replace(
    "[X]</span><span style=\"font-size: 15px; color: #D9CBBB\">Poshaks stitched",
    "1,840</span><span style=\"font-size: 15px; color: #D9CBBB\">Poshaks stitched"
  );
  out = out.replace(
    "[X]</span><span style=\"font-size: 15px; color: #D9CBBB\">Cities and countries",
    "26</span><span style=\"font-size: 15px; color: #D9CBBB\">Cities and countries"
  );

  const sizeValues = SIZES.flat();
  let sizeIndex = 0;
  out = out.replace(/\[X\]–\[X\] in|\[X\]–\[X\] cm|\[X\] in/g, () => sizeValues[sizeIndex++] ?? "7 in");

  const phrases: Array<[string, string]> = [
    ["[COMPANY NAME, GSTIN]", "DivineKraft Atelier Pvt. Ltd. · GSTIN 09AADCD1842E1Z5"],
    ["[STUDIO ADDRESS]", "18, Banke Bihari Marg"],
    ["[CITY, PINCODE]", "Vrindavan, 281121"],
    ["[INSTAGRAM HANDLE]", "divinekraft"],
    ["[PAYMENT GATEWAY]", "Razorpay"],
    ["[COURIER PARTNERS]", "Delhivery and Blue Dart"],
    ["[COUNTRIES]", "India, the US, the UK, Canada, the UAE and Singapore"],
    ["[ADVISOR NAME]", "Kavya Sharma"],
    ["[ADVISOR]", "Kavya"],
    ["[Customer name]", "Ananya Sharma"],
    ["[HOURS]", "10:00–6:30, Tuesday to Sunday"],
    ["[EMAIL]", "seva@divinekraft.com"],
    ["[NUMBER]", "+91 98765 43210"],
    ["[DATE]", "12 August 2026"],
    ["[PIN]", "281121"],
    ["[XXXX]", "1842"],
    ["[0001]", "1048"],
    ["[0002]", "1042"],
    ["[Name]", "Ananya"],
    ["[City]", "Jaipur"],
    ["₹[A]–[B]", "₹2,500–₹6,000"],
    ["₹[B]–[C]", "₹6,000–₹12,000"],
    ["₹[C]–[D]", "₹12,000–₹25,000"],
    ["₹[D]+", "₹25,000+"],
    ["₹[BASE]", "₹3,200"],
    ["₹[TOTAL]", "₹18,640"],
    ["×[F]", "×1.15"],
    ["×[1.2]", "×1.2"],
    ["×[1.4]", "×1.4"],
    ["+[20]%", "+20%"],
    ["[20]%", "20%"],
    ["within [24] hours", "within 24 hours"],
    ["Within [24] hrs", "Within 24 hrs"],
    ["[24] hours", "24 hours"],
    ["[48] hours", "48 hours"],
    ["[48] hrs", "48 hrs"],
    ["Paid within [48] hours", "Paid within 48 hours"],
    ["a [50]%", "a 50%"],
    ["([50]%)", "(50%)"],
    ["[50]%", "50%"],
    ["about [X] hours", "about 40 hours"],
    ["within [X] hours", "within 2 hours"],
    ["within [X] working hours", "within 4 working hours"],
    ["[X] working hours", "4 working hours"],
    ["[X]–[X] working days", "7–14 working days"],
    ["[X] weeks", "3 weeks"],
    ["[X] years", "18 years"],
    ["[X] days", "7 days"],
    ["[X]%", "40%"],
    ["Free above ₹[X]", "Free above ₹7,500"],
    ["flat ₹[X]", "flat ₹180"],
    ["−₹[X]", "−₹9,400"],
    ["+₹[PRICE]", "+₹650"],
    ["Order this design · ₹[PRICE]", "Order this design · ₹4,850"],
  ];
  for (const [from, to] of phrases) out = out.split(from).join(to);

  let rupee = 0;
  out = out.replace(/₹\[PRICE\]|₹\[X\]/g, (token, offset: number, source: string) => {
    const after = source.slice(offset, offset + 720);
    if (token === "₹[PRICE]") {
      if (after.includes("7–10")) return "₹2,450";
      if (after.includes("12–15")) return "₹4,850";
      if (after.includes("20–30")) return "₹12,400";
      if (after.includes("As per tier")) return "₹8,600";
    }
    return RUPEES[rupee++] ?? "₹4,850";
  });

  const karigars = ["Mohan Lal", "Radha Kumari", "Shyam Sundar"];
  let karigar = 0;
  out = out.replace(/\[KARIGAR NAME\]/g, () => karigars[karigar++] ?? "Mohan Lal");

  out = out.replace(/\[X\]/g, "12");
  out = out.replace(/\[[A-Z][A-Z0-9 ,./+]{0,40}\]/g, "DivineKraft");
  return out;
}

const PHOTOS: Record<string, string> = {
  "19b162c0c19762bd2e3eb3c2adb23ff1.svg": "vrindavan-dawn.jpg",
  "737f21d46f41730a050f07920705c607.svg": "zari-detail.jpg",
  "09f932c0c3fd412c0c136ed430d39f49.svg": "karigar-hands.jpg",
  "f0d5783868043885a72f828c4b29c230.svg": "karigar-hands.jpg",
  "d7ade9c725a774f328ebe149423ae285.svg": "zari-detail.jpg",
  "0a02437a3537d668692edbfdfc0c2e4c.svg": "zari-detail.jpg",
  "9762e87e8088bd36063143f46881e664.svg": "99c51cc19ef35e1464d8d2573846f133.jpg",
  "716c2d043df3ef3f7979c9e888895c84.svg": "jugal-poshaks.jpg",
  "7c4439a2f50da6de1ce03a625917ec3a.svg": "karigar-hands.jpg",
  "53a09f1c7a954f643ad31544c2b55f35.svg": "diya-marigold.jpg",
  "b1a8c7ed24014df4db47f386788038ff.svg": "diya-marigold.jpg",
  "28917a1bba7665075e1a94914d919361.svg": "zari-detail.jpg",
  "cc560c006074c6cdb590edb710cda539.svg": "jugal-poshaks.jpg",
  "e1c13986f8f721b8e107af7f490f4057.svg": "keepsake-box.jpg",
  "3ed54d02f86f85394b258de9f531fa79.svg": "diya-marigold.jpg",
};

function liftImages(html: string) {
  return html.replace(/\/images\/([a-f0-9]+\.svg)/g, (full, file: string) =>
    PHOTOS[file] ? `/images/${PHOTOS[file]}` : full
  );
}

export function presentPage(name: string) {
  const file = path.join(process.cwd(), "content", `${name}.html`);
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(
    /<div style="background: #7A1E2C; color: #FFF8EE;[^"]*"[^>]*>\s*Handmade in Vrindavan[\s\S]*?<\/div>/,
    ""
  );
  html = html.replace(/<header\b[\s\S]*?<\/header>/, "");
  html = html.replace(/<footer\b[\s\S]*?<\/footer>/, "");
  html = fillCopy(html);
  html = liftImages(html);
  return html;
}

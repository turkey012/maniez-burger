
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BurgerCustomizer = () => {
  const [size, setSize] = useState("");
  const [veggies, setVeggies] = useState([]);
  const [addons, setAddons] = useState([]);

  const veggieOptions = ["بصل", "طماطم", "خس", "خيار مخلل"];
  const addonOptions = [
    { name: "جبنة شيدر", price: 5 },
    { name: "بيض عيون", price: 7 },
    { name: "مشروم", price: 7 },
    { name: "صوص مانياز", price: 5 },
    { name: "لحم زيادة", price: 20 },
    { name: "حلقات بصل مقلية", price: 10 }
  ];

  const toggleVeggie = (item) => {
    setVeggies((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
    );
  };

  const toggleAddon = (item) => {
    setAddons((prev) =>
      prev.includes(item)
        ? prev.filter((v) => v !== item)
        : [...prev, item]
    );
  };

  const getTotal = () => {
    const basePrice = size === "150g" ? 90 : size === "250g" ? 110 : 0;
    const addonTotal = addons.reduce(
      (sum, item) => sum + addonOptions.find((a) => a.name === item).price,
      0
    );
    return basePrice + addonTotal;
  };

  const getWhatsAppMessage = () => {
    const base = size === "150g" ? "برجر 150 جرام" : size === "250g" ? "برجر 250 جرام" : "";
    const veggieText = veggies.length ? `\nخضار: ${veggies.join(", ")}` : "";
    const addonText = addons.length ? `\nإضافات: ${addons.join(", ")}` : "";
    const total = `\nالإجمالي: ${getTotal()} جنيه`;
    return encodeURIComponent(`أهلاً، عايز أطلب:\n${base}${veggieText}${addonText}${total}`);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">ركّب البرجر بتاعك 🍔</h1>

      <Card className="mb-4">
        <CardContent>
          <p className="font-bold">اختر الحجم:</p>
          <div className="flex gap-2 mt-2">
            <Button
              variant={size === "150g" ? "default" : "outline"}
              onClick={() => setSize("150g")}
            >
              150 جرام – 90 جنيه
            </Button>
            <Button
              variant={size === "250g" ? "default" : "outline"}
              onClick={() => setSize("250g")}
            >
              250 جرام – 110 جنيه
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <p className="font-bold">الخضار (مجاني):</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {veggieOptions.map((v) => (
              <Button
                key={v}
                variant={veggies.includes(v) ? "default" : "outline"}
                onClick={() => toggleVeggie(v)}
              >
                {v}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <p className="font-bold">إضافات (مدفوعة):</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {addonOptions.map((a) => (
              <Button
                key={a.name}
                variant={addons.includes(a.name) ? "default" : "outline"}
                onClick={() => toggleAddon(a.name)}
              >
                {a.name} +{a.price}ج
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center mt-4">
        <p className="text-lg font-bold">الإجمالي: {getTotal()} جنيه</p>
        <a
          href={`https://wa.me/201070500094?text=${getWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-2">اطلب دلوقتي على واتساب</Button>
        </a>
      </div>
    </div>
  );
};

export default BurgerCustomizer;

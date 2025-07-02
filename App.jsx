import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Introducing Your IVI Kit</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          A safe, discreet, and empowering solution for home insemination. Trusted by modern couples.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl">Shop Now</Button>
      </section>

      {/* Product Card */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <img src="/ivi-kit.jpg" alt="IVI Kit" className="rounded-2xl shadow-xl" />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Your Insemination IVI Kit</h2>
          <p className="mb-4">
            Our kit includes sterile catheters, syringes, collection cups, and detailed instructions. Designed for comfort, safety, and effectiveness.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Medical-grade materials</li>
            <li>Easy to use at home</li>
            <li>Discreet packaging</li>
          </ul>
          <Button className="text-lg px-6 py-3 rounded-2xl">Buy Now – ₹1499</Button>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gray-100 p-8 rounded-2xl shadow-md mb-16">
        <h2 className="text-2xl font-semibold mb-4">Why We Created This</h2>
        <p>
          We believe everyone deserves access to affordable, private, and stress-free fertility support. Our IVI Kit is designed for couples and individuals seeking a dignified and empowering way to start their journey.
        </p>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Is the kit safe to use at home?</h3>
              <p>Yes. It includes sterile, medical-grade components and a detailed guide.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Does this replace clinical IUI?</h3>
              <p>It offers an alternative called IVI (Intravaginal Insemination), which is simpler and can be effective when timed with ovulation.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2025 YourBrand Fertility | Privacy Policy | Contact Us: support@yourbrand.in
      </footer>
    </main>
  );
}
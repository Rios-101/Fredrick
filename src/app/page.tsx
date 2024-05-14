import Bar from "@/components/Bar";
import Bar2 from "@/components/Bar2";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Options from "@/components/Options";
import QNA from "@/components/QNA";
import Why from "@/components/Why";
import WhatsAppWidgetDisplay from "@/components/whatsApp/WhatsAppWidgetDisplay";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary-500">
      <Main />
      <Options />
      <Why />
      <Bar />
      <Bar2 />
      <QNA />
      <Footer />
      <WhatsAppWidgetDisplay />
    </div>
  );
}

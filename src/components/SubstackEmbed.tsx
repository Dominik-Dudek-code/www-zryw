import { useEffect } from "react";

const SubstackEmbed = () => {
  useEffect(() => {
    // Dodaj konfigurację widgetu do obiektu window
    window.CustomSubstackWidget = {
      substackUrl: "fundacjazryw.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#F6F5F1",
        input: "#212121",
        email: "#F6F5F1",
        text: "#212121",
      },
    };

    // Utwórz i dodaj <script> z widgetem
    const script = document.createElement("script");
    script.src = "https://substackapi.com/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup jeśli komponent zostanie odmontowany
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="custom-substack-embed"></div>;
};

export default SubstackEmbed;

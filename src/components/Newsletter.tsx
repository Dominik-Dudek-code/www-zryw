import meeting from "/photos/meeting.jpg";
import Container from "./Container";
import SubstackEmbed from "./SubstackEmbed";

const Newsletter: React.FC = () => {
  return (
    <Container>
      <section className="mt-10 xs:mt-20">
        <div className="flex flex-col xs:flex-row justify-between flex-wrap gap-x-4">
          <h3 className="font-new-order text-[54px] xs:leading-[1.2] text-green xs:pb-10">
            Bądź na bieżąco <br /> Subskrybuj
          </h3>
          <div className="xs:w-[513px] mt-10 xs:mt-0">
            <p className="font-calluna text-lg leading-[1.5]">
              Piszesz się na okazjonalne wiadomości od nas? Informacje o
              najnowszych projektach i zaproszenia na zamknięte wydarzenia?
            </p>
            <SubstackEmbed />
            {/* <form onSubmit={(e) => e.preventDefault()} className="flex flex-col xs:flex-row gap-6 justify-between mt-10 h-[120px] xs:h-[48px]">
                            <input
                                type="email"
                                placeholder="Twój email"
                                className="w-full max-w-[384px] h-[50%] xs:h-auto px-3 py-3 border border-green rounded-lg font-calluna text-sm outline-none"
                                required
                            />
                            <Button className="w-[113px] h-[50%] text-base xs:h-auto bg-green text-nowrap">Zapisz się</Button>
                        </form> */}
            {/* <div className="overflow-hidden w-full flex">
              <iframe
                src="https://fundacjazryw.substack.com/embed"
                className="w-full h-[110px]"
              ></iframe>
            </div> */}

            <p className="font-calluna text-xs mt-4">
              Klikając „Zapisz się”, potwierdzasz, że zgadzasz się z{" "}
              <span className="underline">naszym Regulaminem.</span>
            </p>
          </div>
        </div>
        <div className="mt-10 xs:mt-20 max-h-[348px] xs:max-h-[653px] overflow-hidden rounded-lg">
          <img
            src={meeting}
            alt=""
            className="object-cover object-[80%_50%] xs:h-auto xs:mt-[-14%] rounded-lg"
          />
        </div>
      </section>
    </Container>
  );
};

export default Newsletter;

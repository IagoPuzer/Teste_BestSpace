export function Footer() {
  return (
    <div className=" bg-cyan-800">
      <div className="grid lg:flex py-20 gap-y-10 justify-center items-center gap-x-24 border-b-2 border-neutral-500">
        <div className="mb-4 md:mb-0 flex flex-col justify-center items-center">
          <span className="text-neutral-100 text-center">
            Simplificando o universo jurídico
          </span>
        </div>

        <div>
          <ul className="grid gap-4">
            <li className="flex items-center">
              <span className="text-neutral-100 text-lg font-semibold">
                Contato:{" "}
              </span>
            </li>
            <li>
              <a
                href="https://www.instagram.com/juriselfbr/"
                target="_blank"
                className="text-black flex items-center gap-2"
              >
                <div className="bg-neutral-100 rounded-full w-10 h-10 flex justify-center items-center">
                  <i className="icon-[mdi--instagram] flex justify-center w-8 h-8"></i>
                </div>
                <span className="text-neutral-100">@juriselfbr</span>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5584999378726&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20do%20site%20da%20Juriself"
                target="_blank"
                className="text-black flex items-center gap-2"
              >
                <div className="bg-neutral-100 rounded-full w-10 h-10 flex justify-center items-center">
                  <i className="icon-[ic--baseline-whatsapp] flex justify-center w-8 h-8"></i>
                </div>
                <span className="text-neutral-100">+55 84 99937-8726</span>
              </a>
            </li>
            <li>
              <a href="/" className="text-black flex items-center gap-2">
                <div className="bg-neutral-100 rounded-full w-10 h-10 flex justify-center items-center">
                  <i className="icon-[circum--mail] flex justify-center w-8 h-8"></i>
                </div>
                <span className="text-neutral-100">
                  contato@juriself.com.br
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <span className="text-center text-neutral-100">
          © Copyright JuriSelf - Todos os direitos reservados. <br />
          Desenvolvido por Bloko DS
        </span>
      </div>
    </div>
  );
}

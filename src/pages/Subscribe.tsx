import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      }
    })
    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center overflow-hidden">
      <div className="w-full md:p-5 max-w-[1150px] flex lg:flex-row flex-col items-center justify-between mt-10 lg:mt-20 mx-auto">
        <div className="max-w-[640px] lg:px-0 mb-10 px-8 m-auto text-center lg:text-left">
          <div className="flex justify-center lg:block">
            <Logo />
          </div>
          <h1 className="mt-8 text-[1.875rem] md:text-[2.3rem] lg:text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-[.875rem] lg:text-[1rem] text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 lg:my-0 bg-gray-700 rounded border-gray-500 border w-full sm:w-max">
          <strong className="md:text-2xl text-[1.15rem] md:text-start text-center mb-6 block">Inscreva-se gratuitamente</strong>

          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubscribe}
          >
            <input
              className="bg-gray-900 focus:outline outline-2 outline-green-500 rounded px-5 h-12 lg:h-14"
              type="text"
              name="name"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />

            <input
              className="bg-gray-900 focus:outline outline-2 outline-green-50 rounded px-5 h-12 lg:h-14"
              type="email"
              name="email"
              placeholder="Digite seu email"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded  font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <div className="bg-codeMockup bg-center bg-contain h-[235px] w-[362px] lg:h-[40.5rem] lg:w-[76rem]" />
      <Footer />
    </div >
  )
}

/* h-[650px] w-[1216px] lg:h-[650px] lg:w-[1216px] */
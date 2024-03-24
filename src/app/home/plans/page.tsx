import Container from "@/components/content/Container";
import Header from "@/components/content/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

const Plans = () => {
    return (<Header name='Planos'>
        <Container>
            <div className="flex flex-col items-start justify-start gap-8 w-full" >
                <div className="flex flex-col items-center justify-center space-y-4 ">
                    <div className="space-y-2">

                        <h2 className="text-3xl font-bold tracking-tighter ">
                            Preços simples. Possibilidades ilimitadas.
                        </h2>
                        <p className="max-w-[800px] text-base text-muted-foreground">
                            Se você está apenas começando ou precisa de recursos avançados para expandir seus negócios, nós temos para você.
                            Coberto com preços transparentes e sem taxas ocultas.
                        </p>
                    </div>
                </div>

                <div className=" grid max-w-sm items-start justify-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                    <div className="flex flex-col space-y-2 p-8">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Grátis</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Get started with our free plan. Perfect for small projects and experimenting with ideas.
                            </p>
                        </div>
                        <ul className="grid gap-2 py-2">
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Unlimited public projects
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Community support
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                500 build minutes/month
                            </li>
                        </ul>
                        <div className="flex items-center justify-between gap-4" >
                            <div className="self-start">
                                <div className="text-2xl font-semibold">$0</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Por mês</p>
                            </div>

                            <Button variant={'outline'} >Investir</Button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 border-border border rounded p-8">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between " >
                                <h3 className="text-xl font-bold">Básico</h3>
                                <Badge variant="secondary">Recomendado</Badge>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Perfect for personal projects and small teams looking to get started with CI/CD.
                            </p>
                        </div>
                        <ul className="grid gap-2 py-2">
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Unlimited public & private projects
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Email support
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                2,000 build minutes/month
                            </li>
                        </ul>
                        <div className="flex items-center justify-between gap-4" >
                            <div className="self-start">
                                <div className="text-2xl font-semibold">R$29,90</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Por mês</p>
                            </div>

                            <Button variant={'outline'} >Investir</Button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 p-8">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Profissional</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Advanced features for teams that want to ship faster with automation and collaboration.
                            </p>
                        </div>
                        <ul className="grid gap-2 py-2">
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Advanced security features
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Priority support
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                10,000 build minutes/month
                            </li>
                        </ul>
                        <div className="flex items-center justify-between gap-4" >
                            <div className="self-start">
                                <div className="text-2xl font-semibold">R$59,90</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Por mês</p>
                            </div>

                            <Button variant={'outline'} >Investir</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Header>);
}

export default Plans;
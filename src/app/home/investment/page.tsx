import Container from "@/components/content/Container";
import { Separator } from "@/components/ui/separator";
import CoinsCard from "./components/CoinsCard";
import StockCard from "./components/StockCard";
import TaxesCard from "./components/TaxesCard";

//{ cache: 'force-cache', next: { revalidate: 86400 } }

async function fetchCurrencies() {
  try {
    const response = await fetch(
      `https://api.hgbrasil.com/finance?key=755e419b`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
const Investiment = async () => {
  const fetch = await fetchCurrencies();
  const fetchCurrenciesArray = fetch.results.currencies;
  const fetchStocksArray = fetch.results.stocks;
  const fetchTaxesArray = fetch.results.taxes;

  const currencies = [
    {
      name: fetchCurrenciesArray.USD.name,
      buy: fetchCurrenciesArray.USD.buy,
      variation: fetchCurrenciesArray.USD.variation,
    },
    {
      name: fetchCurrenciesArray.CAD.name,
      buy: fetchCurrenciesArray.CAD.buy,
      variation: fetchCurrenciesArray.CAD.variation,
    },
    {
      name: fetchCurrenciesArray.AUD.name,
      buy: fetchCurrenciesArray.AUD.buy,
      variation: fetchCurrenciesArray.AUD.variation,
    },
    {
      name: fetchCurrenciesArray.EUR.name,
      buy: fetchCurrenciesArray.EUR.buy,
      variation: fetchCurrenciesArray.EUR.variation,
    },
    {
      name: fetchCurrenciesArray.CNY.name,
      buy: fetchCurrenciesArray.CNY.buy,
      variation: fetchCurrenciesArray.CNY.variation,
    },
    {
      name: fetchCurrenciesArray.GBP.name,
      buy: fetchCurrenciesArray.GBP.buy,
      variation: fetchCurrenciesArray.GBP.variation,
    },

    {
      name: fetchCurrenciesArray.JPY.name,
      buy: fetchCurrenciesArray.JPY.buy,
      variation: fetchCurrenciesArray.JPY.variation,
    },
    {
      name: fetchCurrenciesArray.ARS.name,
      buy: fetchCurrenciesArray.ARS.buy,
      variation: fetchCurrenciesArray.ARS.variation,
    },

    {
      name: fetchCurrenciesArray.BTC.name,
      buy: fetchCurrenciesArray.BTC.buy,
      variation: fetchCurrenciesArray.ARS.variation,
    },
  ];

  const stocks = [
    {
      name: "IBOVESPA",
      points: fetchStocksArray.IBOVESPA.points,
      variation: fetchStocksArray.IBOVESPA.variation,
    },
    {
      name: "IFIX",
      points: fetchStocksArray.IFIX.points,
      variation: fetchStocksArray.IFIX.variation,
    },
    {
      name: "NASDAQ",
      points: fetchStocksArray.NASDAQ.points,
      variation: fetchStocksArray.NASDAQ.variation,
    },
    {
      name: "DOWJONES",
      points: fetchStocksArray.DOWJONES.points,
      variation: fetchStocksArray.DOWJONES.variation,
    },
    {
      name: "CAC",
      points: fetchStocksArray.CAC.points,
      variation: fetchStocksArray.CAC.variation,
    },
    {
      name: "NIKKEI",
      points: fetchStocksArray.NIKKEI.points,
      variation: fetchStocksArray.NIKKEI.variation,
    },
  ];

  const cdi = fetchTaxesArray.map((item: any) => item.cdi);
  const selic = fetchTaxesArray.map((item: any) => item.selic);

  return (
    <Container>
      <div className="w-full  space-y-8 ">
        <div className="space-y-4">
          <h2 className="font-medium uppercase text-muted-foreground">
            Moedas
          </h2>
          <div className="grid w-full grid-cols-1 gap-4  xl:grid-cols-4">
            {currencies.map((currencie, index) => (
              <CoinsCard
                key={index}
                name={currencie.name}
                buy={currencie.buy}
                variation={currencie.variation}
              />
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="font-medium uppercase text-muted-foreground">Ações</h2>
          <div className="grid w-full  grid-cols-1 gap-4  xl:grid-cols-4">
            {stocks.map((stock, index) => (
              <StockCard
                key={index}
                name={stock.name}
                variation={stock.variation}
              />
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="font-medium uppercase text-muted-foreground">Taxas</h2>
          <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-4">
            <TaxesCard name="CDI" amount={cdi} />
            <TaxesCard name="Selic" amount={selic} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Investiment;

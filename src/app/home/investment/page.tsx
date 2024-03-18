'use client'
import Container from "@/components/content/Container";
import Header from "@/components/content/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowUp, TrendingUp } from "lucide-react";
import Card from "./components/Card";
import { useEffect, useState } from "react";

async function fetchCurrencies() {
    try {
        const response = await fetch(`https://api.hgbrasil.com/finance?key=755e419b`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
const Investiment = () => {

    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchCurrencies();
            setCurrencies(data.results.currencies);
        }
        fetchData();
    }, []);



    return (
        <Header name='Investimento'>
            <Container>
                <div className="w-full" >
                    <div className="grid grid-cols-4 gap-4 w-full">
                        {Object.entries(currencies).map(([key, { name, buy, variation }]) => (
                            <Card key={key} name={name} buy={buy} variation={variation} />
                        ))}
                    </div>
                </div>

            </Container>
        </Header>
    );
}

export default Investiment;
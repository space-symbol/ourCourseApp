import React, {useEffect, useState} from 'react';
import './cards.css'
import Card from "../card/Card";
import Button from "../button/Button";
import Input from "../input/Input";

const cards = [
    {
        src: "https://248006.selcdn.ru/LandGen/desktop_57c9d80b2b75745579f68b99bdd0e2c0516a955f.webp",
        title: "Fullstack-разработчик на Java",
        text: "Разрабатывать и поддерживать приложения на Spring."
    },
    {
        src: "https://248006.selcdn.ru/LandGen/desktop_9567df25c360d949e492c6afcb047f9878baa2b3.webp",
        title: "Fullstack-разработчик на JavaScript",
        text: "Разрабатывать полноценные сайты и веб-приложения на JS"
    },
    {
        src: "https://248006.selcdn.ru/LandGen/desktop_43712003895f94c163a288e6e9e0e00bbf671110.webp",
        title: "Fullstack-разработчик на Python",
        text: "Разрабатывать веб-приложения на Django."
    },
    {
        src: "https://248006.selcdn.ru/LandGen/desktop_2_a7e144f83501cfe49ea4fbbea8d24d513f7849fc.webp",
        title: "Golang разработчик",
        text: "Разрабатывать приложения с микросервисной архитектурой."
    },
    {
        src: "https://248006.selcdn.ru/LandGen/desktop_2_7d5b8e852952b4fc68ca058c53a3b9570fd4f3d7.webp",
        title: "C++ разработчик",
        text: "Разрабатывать сложные программы и сервисы."
    },

]

const Cards = () => {
    const [searchCards, setSearchCards] = useState(cards)
    const [text, setText] = useState('')

    const attributes = {
        onChange: (e) => setText(e.target.value),
        onKeyDown: (key) => {
            key.code === "Enter" && handleClick()
        },
        type: "text",
        value: text,
        placeholder: "Профессии"
    }

    const filterCards = () => {
        const searchValue = text.toLowerCase().replace(/[\s, -]/g, '')
        return cards.filter(card => {
            const title = card.title.toLowerCase().replace(/[\s, -]/g, '')
            const text = card.text.toLowerCase().replace(/[\s, -]/g, '')
            return title.includes(searchValue) || text.includes(searchValue)
        })
    }

    const handleClick = () => {
        if (!text) {
            setSearchCards(cards)
            return
        }
        setSearchCards(filterCards())
    }

    useEffect(() => {
        const Debounce = setTimeout(() => {
            if (!text) {
                setSearchCards(cards)
            }
        }, 300)
        return () => clearTimeout(Debounce)
    }, [text])


    return (
        <div className="main-container">
            <div className="search-wrapper">
                <Input attributes={attributes}/>
                <Button text="Поиск" onClick={() => handleClick()}/>
            </div>
            <div className="cards">
                {searchCards.map(({src, title, text}) => {
                    return <Card key={Math.random() * 100 / 5.12312} src={src} title={title} text={text}/>
                })}
            </div>
        </div>
    );
};

export default Cards;

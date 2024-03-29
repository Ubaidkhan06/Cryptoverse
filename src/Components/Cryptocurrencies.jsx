import millify from "millify"
import { Link } from "react-router-dom"
import { Card, Col, Row, Input } from "antd"

import { useGetCryptosQuery } from "../services/cryptoApi"
import { useEffect, useState } from "react"
import Loader from "./Loader"

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100

    const { data: cryptoList, isFetching } = useGetCryptosQuery(count)

    const [cryptos, setCryptos] = useState([])

    const [searchItem, setSearchItem] = useState('')

    console.log(cryptos)

    useEffect(() => {
        const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchItem.toLowerCase()))
        setCryptos(filteredData)

    }, [cryptoList, searchItem])


    if (isFetching) return (<Loader/>)



    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchItem(e.target.value)} />
                </div>
            )}

            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid} >
                        <Link to={`/crypto/${currency.uuid}`} >
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price : {millify(currency.price)}</p>
                                <p>MarketCap : {millify(currency.marketCap)}</p>
                                <p>Daily Change : {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies
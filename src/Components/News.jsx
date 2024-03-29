import React, { useState } from 'react'
import { Typography, Row, Col, Avatar, Card, Select } from 'antd'
import moment from 'moment/moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const { Title, Text } = Typography

const { Option } = Select

const demoImage = ""

const News = ({ simplified }) => {

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data, isFetching } = useGetCryptosQuery(10)

  const { data: cryptoNews } = useGetCryptoNewsQuery(
    { newsCategory, count: simplified ? 6 : 12 }
  )

  if (!cryptoNews?.value) return (<Loader/>)


  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder="Select a Crypto"
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
            <Option value="Cryptocurrency">
              Cryptocurrency
            </Option>
            {data?.data?.coins.map((coin) => (<Option value={coin.name} >{coin.name}</Option>))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col key={i} xs={24} sm={12} lg={8}>
          <Card hoverable className='news-card'>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title level={4} className='news-title'>
                  {news.name}
                </Title>
                <img style={{ maxWidth: "200px", maxHeight: "100px" }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0, 100)}... ` : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                  <Text className='provider-name' >{news.provider[0]?.name}</Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}

    </Row>
  )
}

export default News
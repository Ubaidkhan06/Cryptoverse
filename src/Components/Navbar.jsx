import { Button, Menu, Typography, Avatar } from "antd"
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'
import icon from '../images/cryptocurrency.png'
import { useEffect, useState } from "react"


const Navbar = () => {

    const [activeMenu, setactiveMenu] = useState(true)
    const [screenSize, setscreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setscreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    useEffect(() => {
        if (screenSize < 768) {
            setactiveMenu(false)
        } else {
            setactiveMenu(true)
        }
    }, [screenSize])




    return (

        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">CryptoVerse</Link>
                </Typography.Title>
                <Button className="menu-control-container"
                    onClick={(e) =>setactiveMenu(!activeMenu)}
                >
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to={'/'}>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to={'/cryptocurrencies'}>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to={'/news'}>News</Link>
                    </Menu.Item>
                </Menu>
            )}

        </div>

    )
}

export default Navbar
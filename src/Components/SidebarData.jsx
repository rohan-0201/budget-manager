//import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCoins, faWallet } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
    {
        title: "Home",
        icon: <FontAwesomeIcon icon={faHouse} />,
        link: '/Home'
    },
    {
        title: "Your Expenses",
        icon: <FontAwesomeIcon icon={faCoins} />,
        link: "/SplitExpenses"
    },
    {
        title: "Budget",
        icon: <FontAwesomeIcon icon={faWallet} />,
        link: "/Budget"
    },
    
]
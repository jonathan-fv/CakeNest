import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AddProduct from "./AddProduct"
import UpdateProduct from "./UpdateProduct"

export const tabsConfig = [
  {
    index: "add",
    label: "Ajouter un produit",
    form: <AddProduct/>,
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    form: <UpdateProduct />,
    Icon: <MdModeEditOutline />,
  },
]

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected)
}

import { ShopByCatagoryLocators } from "../locators/ShopByCatagory.json"
import { P03_ShopByCatagory } from "../pages/P03_ShopByCatagory"
import { LoginUtils } from "../utils/LoginUtils";

const P03_Test = new P03_ShopByCatagory;

describe('User can shop from catagory', ()=>{
    it("TC01: Verify that User can add items to cart from Shop By catagory", ()=>{
        LoginUtils();
        P03_Test.ShopByCatagoryHeaderMenuClick()
        P03_Test.PhoneTabletiPodCatagoryClick()
        P03_Test.FilterApply()

    })
})

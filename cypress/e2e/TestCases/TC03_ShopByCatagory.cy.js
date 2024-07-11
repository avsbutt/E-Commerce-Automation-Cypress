import { ShopByCatagoryLocators } from "../locators/ShopByCatagory.json"
import { P03_ShopByCatagoryClass } from "../pages/P03_ShopByCatagory"
import { LoginUtils } from "../utils/LoginUtils";

const P03_Test = new P03_ShopByCatagoryClass;

describe('Shop By Catagory', ()=>{
    it("TestCase_004: Verify that User can add items to cart from Shop By catagory", ()=>{
        LoginUtils();
        P03_Test.ShopByCatagoryHeaderMenuClick()
        P03_Test.PhoneTabletiPodCatagoryClick()
        P03_Test.FilterApply()
        P03_Test.iPodShuffleAddToCart()
        P03_Test.iPodNanoAddToCart()
        P03_Test.iMacAddToCart()
        P03_Test.AppleCinemaAddToCart()
        // P03_Test.iPodClassicAddToCart()

    })
})

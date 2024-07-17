import { P06_ProductCpmpareClass } from "../pages/P06_ProductCompare"
const P06_Test = new P06_ProductCpmpareClass
import { LoginUtils } from "../utils/LoginUtils";


describe('Product Compare', ()=>{
    it.skip("TestCase_009: Verify that User can Add item To ProductCompare", ()=>{
        LoginUtils();
        P06_Test.ClickOnMenuAndSelectNokia()
        P06_Test.ClickOnInStock()
        P06_Test.CanonEos5DAddToProductCompare()
        P06_Test.SamsungSyncMasterAddToProductCompare()
  
    })
    it.skip("TestCase_010: Verify that User can Remove item from ProductCompare List", ()=>{
        LoginUtils();
        P06_Test.ClickOnMenuAndSelectNokia()
        P06_Test.ClickOnInStock()
        P06_Test.CanonEos5DAddToProductCompare()
        P06_Test.SamsungSyncMasterAddToProductCompare()
        P06_Test.ClickOnProductCompareIcon()
        P06_Test.RemoveItemFromProductCompare() //THERE ARE MULTIPLE BUTTON WITH SAME LOCATOR TO HANDLE THIS WE USE eq(0)/eq(1) THIS WILL CLICK ONLY ONE LOCATOR
        P06_Test.RemoveItemFromProductCompare()
    })
    it.skip("TestCase_011: Verify that User can Add item To Cart From ProductCompare", ()=>{

        LoginUtils();
        P06_Test.ClickOnMenuAndSelectNokia()
        P06_Test.ClickOnInStock()
        P06_Test.CanonEos5DAddToProductCompare()
        P06_Test.SamsungSyncMasterAddToProductCompare()
        P06_Test.ClickOnProductCompareIcon()
        P06_Test.AddToCartItemFromProductCompare() 
         
    })


})
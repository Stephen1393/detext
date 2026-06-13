import request from "supertest"
import {app} from "../api.js"


describe("document API", () => {
    
    it("GET / should return status 200 with 'a homepage' message", async () => {

        const response = await request(app).get('/')

        expect(response.status).toBe(200)
        expect(response.text).toBe("a homepage")
    })
    

})






//test each function in api, end-to-end
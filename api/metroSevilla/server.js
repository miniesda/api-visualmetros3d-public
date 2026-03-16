process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import express from "express"
import axios from "axios"
import https from "https"
import { parseStringPromise } from "xml2js"

const app = express()

app.get("/api/metroSevilla/:id", async (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).json({ error: "Missing stop id" })

  try {
    const url = `https://-----ip:puerto de la api metro de sevilla-----/GET/estimaciones/${id}`

    const agent = new https.Agent({ rejectUnauthorized: false })

    const response = await axios.get(url, { httpsAgent: agent, timeout: 10000 })

    // Convertimos XML a JSON
    const jsonData = await parseStringPromise(response.data, { explicitArray: false })

    res.json(jsonData)

  } catch (error) {
    res.status(500).json({
      error: "Proxy error",
      message: error.message
    })
  }
})

app.listen(3000, () => console.log("API running on port 3000"))

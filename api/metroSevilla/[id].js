export default async function handler(req, res) {
  const { id } = req.query

  if (!id) {
    return res.status(400).json({ error: "Missing id" })
  }

  try {
    const response = await fetch(`http://---api:port of the proxy---/api/metroSevilla/${id}`)
    const data = await response.json()

    res.status(200).json(data)

  } catch (err) {
    res.status(500).json({
      error: "Proxy failed",
      message: err.message
    })
  }
}

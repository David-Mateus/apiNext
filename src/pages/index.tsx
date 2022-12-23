import { useEffect } from "react"

export default function Home() {
  // requisição para a API
  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
  return (
    <h1>Hello World</h1>
  )
}

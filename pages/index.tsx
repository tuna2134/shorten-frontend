import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Home() {
    const [result, setResult] = React.useState("")
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (!(event.target instanceof HTMLFormElement)) return
        const r = await axios.post("https://shor.f5.si/shorten", {
            url: event.target.url.value,
        })
        setResult(r.data)
        toast.success("URL shortened successfully!")
    }
    return (
        <>
          <h2 className="home-title">短縮しよう！</h2>
          <Form onSubmit={handleSubmit} className="mb-3">
            <Form.Group className="mb-3">
                <Form.Label>URL</Form.Label>
                <Form.Control type="text" placeholder="Enter URL" name="url" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create
            </Button>
          </Form>
          <p>Result: <a href={result}>{result}</a></p>
        </>
    )
}
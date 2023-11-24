import { useEffect, useState } from "react"

export default function PreviewImage({imageURL}) {
    const [previewImage, setPreviewImage] = useState("")
    useEffect(() => {
        if(!imageURL) return
        const reader = new FileReader()
        reader.onloadend=() => {
            setPreviewImage(reader.result)
        }
        reader.readAsDataURL(imageURL)
        return () =>{
            reader.abort()
        }
    }, [imageURL]
    )

    return previewImage
}

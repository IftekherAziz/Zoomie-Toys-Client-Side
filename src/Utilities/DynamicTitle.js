import { useEffect } from "react"

const DynamicTitle = title => {
    useEffect(() => {
        document.title = `Zoomie Toys | ${title}`;
    }, [title])
}
export default DynamicTitle;
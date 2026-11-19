import { Link } from "react-router"
import { SiteFrame } from "./SiteFrame"

export function PageNotFound() {
  return (
    <SiteFrame>
        <div className="flex flex-col gap-6 self-center bg-black px-10 py-10 max-w-350">
          <h1 className="text-lg self-center">Page Not Found!</h1>
          <div>
            <p>Things may have shifted around since you were last here.</p>
            <p><Link to="/">Click Here</Link> to return to the homepage.</p>
          </div>
        </div>
    </SiteFrame>
  )
}

export default PageNotFound

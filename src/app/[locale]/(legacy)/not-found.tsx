import Link from "next/link";
import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";

export default function NotFound() {
    return (
        <>
            <div className="error-area ptb-100">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="error-content">
                                <Image
                                    src={ImageUrl.NotFound404.path}
                                    alt="error"
                                    width={500}
                                    height={430}
                                />

                                <h3>Error 404 : Page Not Found</h3>
                                <p>
                                    The page you are looking for might have been removed had its
                                    name changed or is temporarily unavailable.
                                </p>

                                <Link href="/public" className="default-btn">
                                    Go to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

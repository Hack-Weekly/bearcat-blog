import './globals.scss'

export default function RootLayout ({
    children,
}) {
    //

    return (
        <html lang="en">
            <head>
                <title>Bearcat Blog</title>
                <meta name="description" content="Green Bearcat Blog Hackathon" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
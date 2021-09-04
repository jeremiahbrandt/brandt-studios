interface PaintingPageProps {
    title: string
}

export function PaintingPage(props: PaintingPageProps) {
    return (
        <div>
            <h1>Painting Page for {props.title}</h1>
        </div>
    )
}
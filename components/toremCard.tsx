import { Card, CardContent, Stack, Typography, Link } from "@mui/material"

interface toRem {
    id: string;
    language?: string;
    tag: string;
    sentences: string;
}



const ToremCard = (torem: toRem) => {
    return (
        <>
        <Typography>
                {torem.sentences}
            </Typography>
            <Stack
            direction='row-reverse'
            spacing={1}
            mt={1}>
                {
                    torem.tag.split(" ").map((val, i: number) => {
                        return (
                            <Link href="#" underline="hover" variant="caption" key={i}>
                                {val}
                            </Link>
                        )
                    })
                }
            </Stack>
        </>
    )
}

export { ToremCard }
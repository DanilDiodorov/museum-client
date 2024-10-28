import {
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography,
} from '@material-tailwind/react'

export default function TimeItem({
    year,
    text,
}: {
    year: number
    text: string
}) {
    return (
        <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography
                    placeholder="year"
                    variant="h6"
                    className="leading-none text-tarawera-950"
                >
                    {year}
                </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
                <Typography
                    placeholder="text"
                    className="font-normal text-tarawera-950"
                >
                    {text}
                </Typography>
            </TimelineBody>
        </TimelineItem>
    )
}

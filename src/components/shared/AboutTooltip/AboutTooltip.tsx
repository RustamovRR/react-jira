import React, { FC } from 'react';

import { Button, Tooltip } from 'components/shared'

import feedbackImage from './assets/feedback.png';
import { FeedbackDropdown, FeedbackImageCont, FeedbackImage, FeedbackParagraph } from './AboutTooltipStyles';

export type Props = {
    tooltipProps: any
};

const AboutTooltip: FC<Props> = ({ tooltipProps }) => {
    return (
        <Tooltip
            width={300}
            {...tooltipProps}
            renderContent={() => (
                <FeedbackDropdown>
                    <FeedbackImageCont>
                        <FeedbackImage src={feedbackImage} alt="Give feedback" />
                    </FeedbackImageCont>

                    <FeedbackParagraph>
                        This simplified Jira clone is built with React on the front-end and Node/TypeScript on the
                        back-end.
                    </FeedbackParagraph>

                    <FeedbackParagraph>
                        {'Read more on my website or reach out via '}
                        <a href="mailto:ivor@codetree.co">
                            <strong>ivor@codetree.co</strong>
                        </a>
                    </FeedbackParagraph>

                    <a href="https://getivor.com/" target="_blank" rel="noreferrer noopener">
                        <Button variant="primary">Visit Website</Button>
                    </a>

                    <a href="https://github.com/oldboyxx/jira_clone" target="_blank" rel="noreferrer noopener">
                        <Button style={{ marginLeft: 10 }} icon="github">
                            Github Repo
                        </Button>
                    </a>
                </FeedbackDropdown>
            )}
        />
    );
}

export default AboutTooltip;
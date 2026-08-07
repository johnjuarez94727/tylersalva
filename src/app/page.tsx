import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  RevealFx,
  Column,
  Row,
  Grid,
  Card,
  Badge,
  Tag,
  Icon,
  SmartLink,
} from "@/once-ui/components";

import { baseURL } from "@/app/resources";
import { home, about, person, social } from "@/app/resources/content";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  const linkedIn = social.find((item) => item.name === "LinkedIn" && item.link);
  const email = social.find((item) => item.name === "Email" && item.link);
  const featuredExperiences = about.work.experiences.slice(0, 4);
  const projects = about.work.experiences.flatMap((experience) =>
    (experience.links || []).map((projectLink) => ({
      ...projectLink,
      company: experience.company,
    })),
  );

  return (
    <Column maxWidth="l" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />

      {/* Hero */}
      <Column fillWidth horizontal="center" paddingTop="l" paddingBottom="m" gap="m">
        <RevealFx translateY="4" horizontal="center" paddingBottom="s">
          <Badge title="Gold Stevie Award · Tech Achievement" icon="checkCircle" arrow={false} />
        </RevealFx>
        <RevealFx translateY="4" delay={0.1} horizontal="center">
          <Text variant="label-strong-l" onBackground="neutral-weak" align="center">
            {person.name} · {home.tagline}
          </Text>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} horizontal="center">
          <Column maxWidth="m" horizontal="center">
            <Heading wrap="balance" variant="display-strong-xl" align="center">
              {home.headline}
            </Heading>
          </Column>
        </RevealFx>
        <RevealFx translateY="12" delay={0.3} horizontal="center">
          <Column maxWidth="s" horizontal="center">
            <Text
              wrap="balance"
              align="center"
              onBackground="neutral-weak"
              variant="heading-default-l"
            >
              {home.subline}
            </Text>
          </Column>
        </RevealFx>
        <RevealFx translateY="16" delay={0.4} horizontal="center" paddingTop="m">
          <Flex gap="12" wrap horizontal="center">
            <Button id="hero-about" href="/about" variant="primary" size="l" arrowIcon>
              View my experience
            </Button>
            {linkedIn && (
              <Button
                href={linkedIn.link}
                prefixIcon="linkedin"
                variant="secondary"
                size="l"
              >
                LinkedIn
              </Button>
            )}
            {email && (
              <Button href={email.link} prefixIcon="email" variant="tertiary" size="l">
                Get in touch
              </Button>
            )}
          </Flex>
        </RevealFx>
      </Column>

      {/* Stats */}
      <RevealFx translateY="16" delay={0.5} fillWidth>
        <Grid fillWidth columns="4" tabletColumns="2" mobileColumns="2" gap="16">
          {home.stats.map((stat, index) => (
            <Card
              key={index}
              direction="column"
              fillWidth
              gap="4"
              padding="l"
              radius="l"
              horizontal="center"
              vertical="center"
            >
              <Heading variant="display-strong-m" align="center">
                {stat.value}
              </Heading>
              <Text
                variant="label-default-s"
                onBackground="neutral-weak"
                align="center"
                wrap="balance"
              >
                {stat.label}
              </Text>
            </Card>
          ))}
        </Grid>
      </RevealFx>

      {/* What I do */}
      {about.technical.display && (
        <Column fillWidth gap="l" paddingTop="l">
          <Column fillWidth horizontal="center" gap="8">
            <Tag size="l" prefixIcon="grid">
              What I do
            </Tag>
            <Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
              Expertise across the stack
            </Heading>
          </Column>
          <Grid fillWidth columns="3" tabletColumns="2" mobileColumns="1" gap="16">
            {about.technical.skills.map((skill, index) => (
              <Card
                key={index}
                direction="row"
                fillWidth
                vertical="center"
                gap="12"
                padding="m"
                radius="l"
              >
                {skill.icon && (
                  <Flex
                    horizontal="center"
                    vertical="center"
                    minWidth="40"
                    minHeight="40"
                    radius="m"
                    background="brand-alpha-weak"
                  >
                    <Icon name={skill.icon} size="s" onBackground="brand-medium" />
                  </Flex>
                )}
                <Column gap="2">
                  <Text variant="heading-strong-s">{skill.title}</Text>
                  {skill.summary && (
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {skill.summary}
                    </Text>
                  )}
                </Column>
              </Card>
            ))}
          </Grid>
        </Column>
      )}

      {/* Featured projects */}
      {projects.length > 0 && (
        <Column fillWidth gap="l" paddingTop="l">
          <Column fillWidth horizontal="center" gap="8">
            <Tag size="l" prefixIcon="grid">
              Featured projects
            </Tag>
            <Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
              Products I've shipped
            </Heading>
          </Column>
          <Grid fillWidth columns="3" tabletColumns="2" mobileColumns="1" gap="16">
            {projects.map((project, index) => (
              <SmartLink
                key={index}
                unstyled
                fillWidth
                href={project.url}
                style={{ height: "100%" }}
              >
                <Card
                  fillWidth
                  fillHeight
                  direction="column"
                  gap="8"
                  padding="l"
                  radius="l"
                >
                  <Flex fillWidth horizontal="space-between" vertical="center" gap="8">
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      {project.company}
                    </Text>
                    <Icon
                      name="arrowUpRightFromSquare"
                      size="xs"
                      onBackground="neutral-weak"
                    />
                  </Flex>
                  <Flex gap="8" vertical="center">
                    {project.icon && (
                      <Icon name={project.icon} size="s" onBackground="brand-medium" />
                    )}
                    <Heading as="h3" variant="heading-strong-m">
                      {project.label}
                    </Heading>
                  </Flex>
                </Card>
              </SmartLink>
            ))}
          </Grid>
        </Column>
      )}

      {/* Experience highlights */}
      {about.work.display && (
        <Column fillWidth gap="l" paddingTop="l">
          <Column fillWidth horizontal="center" gap="8">
            <Tag size="l" prefixIcon="person">
              Experience
            </Tag>
            <Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
              Where I've made an impact
            </Heading>
          </Column>
          <Column fillWidth gap="12">
            {featuredExperiences.map((experience, index) => (
              <Card
                key={index}
                fillWidth
                padding="l"
                radius="l"
                direction="column"
                gap="12"
              >
                <Flex
                  fillWidth
                  horizontal="space-between"
                  vertical="center"
                  gap="12"
                  mobileDirection="column"
                >
                  <Column gap="4">
                    <Heading as="h3" variant="heading-strong-l">
                      {experience.company}
                    </Heading>
                    <Text variant="body-default-m" onBackground="brand-weak">
                      {experience.role}
                    </Text>
                  </Column>
                  <Tag size="m">{experience.timeframe}</Tag>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {experience.achievements[0]}
                </Text>
                {(experience.link ||
                  (experience.links && experience.links.length > 0)) && (
                  <Flex fillWidth wrap gap="8" paddingTop="4">
                    {experience.link && (
                      <Button
                        href={experience.link}
                        size="s"
                        variant="tertiary"
                        suffixIcon="arrowUpRightFromSquare"
                      >
                        <Flex gap="8" vertical="center">
                          {experience.logo && (
                            <img
                              src={experience.logo}
                              alt=""
                              width={16}
                              height={16}
                              style={{ borderRadius: "4px", display: "block" }}
                            />
                          )}
                          Website
                        </Flex>
                      </Button>
                    )}
                    {experience.links?.map((projectLink, linkIndex) => (
                      <Button
                        key={linkIndex}
                        href={projectLink.url}
                        label={projectLink.label}
                        size="s"
                        variant="tertiary"
                        prefixIcon={projectLink.icon}
                        suffixIcon="arrowUpRightFromSquare"
                      />
                    ))}
                  </Flex>
                )}
              </Card>
            ))}
          </Column>
          <Flex fillWidth horizontal="center" paddingTop="s">
            <Button id="exp-about" href="/about" variant="secondary" size="m" arrowIcon>
              See full background
            </Button>
          </Flex>
        </Column>
      )}

      {/* Call to action */}
      <RevealFx translateY="16" fillWidth>
        <Card
          fillWidth
          direction="column"
          horizontal="center"
          gap="16"
          padding="xl"
          radius="l"
          background="brand-alpha-weak"
          border="brand-alpha-medium"
        >
          <Icon name="email" size="l" onBackground="brand-medium" />
          <Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
            Let's build something that matters
          </Heading>
          <Column maxWidth="xs" horizontal="center">
            <Text align="center" onBackground="neutral-weak" variant="body-default-l">
              Open to senior engineering roles building AI and healthcare products at scale.
            </Text>
          </Column>
          <Flex gap="12" wrap horizontal="center" paddingTop="s">
            {email && (
              <Button href={email.link} prefixIcon="email" variant="primary" size="l">
                Email me
              </Button>
            )}
            {linkedIn && (
              <Button
                href={linkedIn.link}
                prefixIcon="linkedin"
                variant="secondary"
                size="l"
              >
                Connect on LinkedIn
              </Button>
            )}
          </Flex>
        </Card>
      </RevealFx>
    </Column>
  );
}

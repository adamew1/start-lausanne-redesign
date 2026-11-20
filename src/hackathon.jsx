
{/* START Hackathon 2027 — event detail page */ }

const HackathonPage = () => {
    const m = useIsMobile();
    const base = EVENTS.find(e => e.id === "hackathon");

    const event = {
        ...base,

        fullDescription:
            "START Lausanne, the student entrepreneurship association of UNIL and EPFL, is hosting its hackathon as an official stop of the START Hack League. For one weekend, students in tech, business and design team up to work on real challenges set by our partner companies. They build a prototype, pitch it to a jury and compete for prizes and League points. You don’t need hackathon experience. Come with a team of 2 to 5 people, or come alone and find teammates during matchmaking at the start of the event. Food is provided all weekend.",

        highlights: [
            "Official stop of the START Hack League",
            "Real challenges from partner companies",
            "Open to students in tech, business and design",
            "Teams of 2 to 5 people, with matchmaking available"
        ],

        whatYouGet: [
            "Food provided all weekend",
            "Networking and teamwork",
            "Prizes and League points",
            "Hands-on experience"
        ],

        media: []
    };

    return (
        <EventDetailShell event={event}>

            {/* START Hack League */}
            <div className="card" style={{ padding: 32 }}>
                <DetailHeading>What is the START Hack League?</DetailHeading>

                <p style={{
                    color: "var(--text-dim)",
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 20
                }}>
                    The START Hack League is a season of hackathons run by
                    START Global together with the chapters of the START
                    Network across Europe, from St. Gallen, Munich and Paris
                    to London, Barcelona, Warsaw and Lausanne.
                </p>

                <p style={{
                    color: "var(--text-dim)",
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 20
                }}>
                    These chapters used to run their own separate hackathons.
                    The League brings them into one season with the same
                    format and one shared individual leaderboard for
                    everyone who competes.
                </p>

                <p style={{
                    color: "var(--text-dim)",
                    fontSize: 15,
                    lineHeight: 1.8
                }}>
                    The season ends with START Hack in St. Gallen,
                    the Grand Final. It's Europe's biggest entrepreneurial
                    hackathon and celebrated its 10th anniversary in 2026.
                    The 2026/27 season is the League's first season.
                </p>
            </div>

            {/* START Hack League information cards */}
            <div style={{
                display: "grid",
                gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
                gap: 16
            }}>
                {[
                    {
                        number: "2026/27",
                        label: "First League Season"
                    },
                    {
                        number: "Europe",
                        label: "START Network Hackathons"
                    },
                    {
                        number: "St. Gallen",
                        label: "Grand Final"
                    }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="card"
                        style={{
                            padding: 24,
                            textAlign: "center"
                        }}
                    >
                        <div
                            className="text-gradient"
                            style={{
                                fontFamily: "var(--display)",
                                fontSize: "clamp(20px, 2vw, 30px)",
                                fontWeight: 800,
                                marginBottom: 12
                            }}
                        >
                            {item.number}
                        </div>

                        <p style={{
                            color: "var(--text-dim)",
                            fontSize: 13
                        }}>
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* HOW POINTS WORK */}
            <div className="card" style={{ padding: 32 }}>
                <DetailHeading>How Points Work</DetailHeading>

                <p style={{
                    color: "var(--text-dim)",
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 28
                }}>
                    Every hacker has their own profile and earns points
                    individually. Your points stay with you even if you
                    change teams from one event to the next.
                </p>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: m ? "1fr 1fr" : "repeat(4, 1fr)",
                    gap: 12
                }}>
                    {[
                        { points: "+1", label: "Project Submitted" },
                        { points: "+3", label: "Challenge Winner" },
                        { points: "+5", label: "Overall Event Winner" },
                        { points: "×2", label: "Grand Final Points" }
                    ].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: "var(--bg-elev)",
                                border: "1px solid var(--border)",
                                borderRadius: "var(--rad-md)",
                                padding: m ? 14 : 20,
                                textAlign: "center"
                            }}
                        >
                            <div
                                className="text-gradient"
                                style={{
                                    fontFamily: "var(--display)",
                                    fontWeight: 800,
                                    fontSize: "clamp(26px, 3vw, 42px)",
                                    marginBottom: 12
                                }}
                            >
                                {item.points}
                            </div>

                            <p style={{
                                color: "var(--text-dim)",
                                fontSize: 12,
                                lineHeight: 1.5
                            }}>
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                <p style={{
                    color: "var(--text-mute)",
                    fontSize: 13,
                    lineHeight: 1.7,
                    marginTop: 24
                }}>
                    The +5 points for an overall event win replace the +3
                    challenge-winning points; they are not added together.
                    Points are doubled at the Grand Final.
                </p>
            </div>

            {/* LEADERBOARD RULES */}
            <div className="card" style={{ padding: 32 }}>
                <DetailHeading>Leaderboard Rules</DetailHeading>

                <p style={{
                    color: "var(--text-dim)",
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 18
                }}>
                    Points reset to zero at the beginning of each season.
                    If two hackers have the same number of points,
                    their ranking is determined by the following criteria,
                    in order:
                </p>

                <DetailCheckList items={[
                    "Number of overall event wins",
                    "Number of challenge wins",
                    "Number of event participations"
                ]} />
            </div>

            {/* WHY IT'S WORTH COMPETING */}
            <div className="card" style={{ padding: 32 }}>
                <DetailHeading>Why It's Worth Competing</DetailHeading>

                <p style={{
                    color: "var(--text-dim)",
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 28
                }}>
                    Every hackathon is an opportunity to build something new,
                    meet other innovators and climb the START Hack League
                    leaderboard. The more events you join, the more points
                    you can earn.
                </p>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)",
                    gap: 16,
                    marginBottom: 28
                }}>
                    {[
                        {
                            number: "TOP 15",
                            title: "Direct Acceptance",
                            description:
                                "The 15 best-ranked hackers before the Grand Final receive direct acceptance to START Hack in St. Gallen, along with their whole team of up to 4 people."
                        },
                        {
                            number: "EXTRA PRIZE",
                            title: "League Champion",
                            description:
                                "The overall START Hack League winner receives an additional prize on top of the awards earned at individual events."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: "var(--bg-elev)",
                                border: "1px solid var(--border)",
                                borderRadius: "var(--rad-md)",
                                padding: 24
                            }}
                        >
                            <div
                                className="text-gradient"
                                style={{
                                    fontFamily: "var(--display)",
                                    fontSize: "clamp(22px, 2.5vw, 34px)",
                                    fontWeight: 800,
                                    marginBottom: 12
                                }}
                            >
                                {item.number}
                            </div>

                            <h4 style={{
                                fontFamily: "var(--display)",
                                fontSize: 17,
                                fontWeight: 700,
                                color: "#fff",
                                marginBottom: 12
                            }}>
                                {item.title}
                            </h4>

                            <p style={{
                                color: "var(--text-dim)",
                                fontSize: 13,
                                lineHeight: 1.7
                            }}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p style={{
                    color: "var(--text-dim)",
                    fontSize: 15,
                    lineHeight: 1.8
                }}>
                    Just one event is enough to appear on the leaderboard,
                    and each additional event gives you another opportunity
                    to increase your score.
                </p>
            </div>

            {/* GRAND FINAL REQUIREMENT */}
            <div style={{
                padding: 24,
                background: "var(--accent-soft)",
                border: "1px solid var(--accent)",
                borderRadius: "var(--rad-md)",
                display: "flex",
                alignItems: "flex-start",
                gap: 16
            }}>
                <span style={{
                    fontSize: 24,
                    flexShrink: 0
                }}>
                    ⚡
                </span>

                <div>
                    <h4 style={{
                        color: "#fff",
                        fontFamily: "var(--display)",
                        fontSize: 17,
                        fontWeight: 700,
                        marginBottom: 10
                    }}>
                        Grand Final Requirement
                    </h4>

                    <p style={{
                        color: "var(--text-dim)",
                        fontSize: 14,
                        lineHeight: 1.7
                    }}>
                        To have your Grand Final points count toward the
                        START Hack League leaderboard, you must have
                        participated in at least one League event
                        before START Hack.
                    </p>
                </div>
            </div>

            {/* HOW TO JOIN */}
            <div className="card" style={{ padding: 32 }}>
                <DetailHeading>How to Join</DetailHeading>

                <p style={{
                    color: "var(--text-dim)",
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 28
                }}>
                    Ready to take part in the START Hack League?
                    Here's how to get started.
                </p>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)",
                    gap: 16,
                    marginBottom: 28
                }}>
                    {[
                        {
                            number: "01",
                            title: "Create Your Profile",
                            description:
                                "Create your individual hacker profile on hackleague.org to join the START Hack League."
                        },
                        {
                            number: "02",
                            title: "Find Your Team",
                            description:
                                "Join with your team of 2 to 5 people, or come alone and find teammates during matchmaking at the event."
                        }
                    ].map((step) => (
                        <div
                            key={step.number}
                            style={{
                                background: "var(--bg-elev)",
                                border: "1px solid var(--border)",
                                borderRadius: "var(--rad-md)",
                                padding: 24
                            }}
                        >
                            <div className="mono-label" style={{
                                color: "var(--accent)",
                                marginBottom: 14
                            }}>
                                Step {step.number}
                            </div>

                            <h4 style={{
                                fontFamily: "var(--display)",
                                fontSize: 18,
                                fontWeight: 700,
                                color: "#fff",
                                marginBottom: 12
                            }}>
                                {step.title}
                            </h4>

                            <p style={{
                                color: "var(--text-dim)",
                                fontSize: 14,
                                lineHeight: 1.7
                            }}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p style={{
                    color: "var(--text-dim)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    marginBottom: 24
                }}>
                    Applications are open to everyone on the same terms.
                    No previous hackathon experience is required.
                </p>

                <div style={{
                    display: "flex",
                    justifyContent: "flex-start"
                }}>
                    <Btn primary href="https://hackleague.org">
                        Join the START Hack League
                    </Btn>
                </div>
            </div>

        </EventDetailShell>
    );
};

window.HackathonPage = HackathonPage;

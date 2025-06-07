import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
    IoLocationOutline,
    IoTimeOutline,
    IoPeopleOutline,
    IoRocketOutline,
    IoHeartOutline,
    IoGlobeOutline,
    IoCheckmarkCircleOutline,
    IoMailOutline,
    IoArrowForwardOutline,
} from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface JobPosition {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
    benefits: string[];
}

const Careers = () => {
    const { t } = useTranslation();

    const jobPositions: JobPosition[] = [
        {
            id: "frontend-dev",
            title: t("careers.positions.frontendDev.title"),
            department: t("careers.positions.frontendDev.department"),
            location: t("careers.positions.frontendDev.location"),
            type: t("careers.positions.frontendDev.type"),
            description: t("careers.positions.frontendDev.description"),
            requirements: t("careers.positions.frontendDev.requirements", {
                returnObjects: true,
            }) as string[],
            benefits: t("careers.positions.frontendDev.benefits", {
                returnObjects: true,
            }) as string[],
        },
        {
            id: "backend-dev",
            title: t("careers.positions.backendDev.title"),
            department: t("careers.positions.backendDev.department"),
            location: t("careers.positions.backendDev.location"),
            type: t("careers.positions.backendDev.type"),
            description: t("careers.positions.backendDev.description"),
            requirements: t("careers.positions.backendDev.requirements", {
                returnObjects: true,
            }) as string[],
            benefits: t("careers.positions.backendDev.benefits", {
                returnObjects: true,
            }) as string[],
        },
        {
            id: "ui-ux-designer",
            title: t("careers.positions.uiUxDesigner.title"),
            department: t("careers.positions.uiUxDesigner.department"),
            location: t("careers.positions.uiUxDesigner.location"),
            type: t("careers.positions.uiUxDesigner.type"),
            description: t("careers.positions.uiUxDesigner.description"),
            requirements: t("careers.positions.uiUxDesigner.requirements", {
                returnObjects: true,
            }) as string[],
            benefits: t("careers.positions.uiUxDesigner.benefits", {
                returnObjects: true,
            }) as string[],
        },
        {
            id: "devops-engineer",
            title: t("careers.positions.devopsEngineer.title"),
            department: t("careers.positions.devopsEngineer.department"),
            location: t("careers.positions.devopsEngineer.location"),
            type: t("careers.positions.devopsEngineer.type"),
            description: t("careers.positions.devopsEngineer.description"),
            requirements: t("careers.positions.devopsEngineer.requirements", {
                returnObjects: true,
            }) as string[],
            benefits: t("careers.positions.devopsEngineer.benefits", {
                returnObjects: true,
            }) as string[],
        },
    ];

    const companyValues = [
        {
            icon: IoGlobeOutline,
            title: t("careers.values.global.title"),
            description: t("careers.values.global.description"),
        },
        {
            icon: IoRocketOutline,
            title: t("careers.values.innovation.title"),
            description: t("careers.values.innovation.description"),
        },
        {
            icon: IoPeopleOutline,
            title: t("careers.values.collaboration.title"),
            description: t("careers.values.collaboration.description"),
        },
        {
            icon: IoHeartOutline,
            title: t("careers.values.passion.title"),
            description: t("careers.values.passion.description"),
        },
    ];

    return (
        <div className="min-h-screen bg-base-100">
            <Navbar darkMode={false} setDarkMode={() => {}} />

            {/* Hero Section */}
            <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                            {t("careers.hero.title")}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-base-content/70">
                            {t("careers.hero.subtitle")}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#open-positions"
                                className="btn btn-primary btn-lg"
                            >
                                {t("careers.hero.viewPositions")}
                            </a>
                            <a
                                href="#company-culture"
                                className="btn btn-outline btn-lg"
                            >
                                {t("careers.hero.learnCulture")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values */}
            <section id="company-culture" className="py-24 bg-base-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                            {t("careers.culture.title")}
                        </h2>
                        <p className="mt-4 text-lg text-base-content/70">
                            {t("careers.culture.subtitle")}
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {companyValues.map((value, index) => (
                            <div
                                key={index}
                                className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="card-body items-center text-center">
                                    <value.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="card-title text-lg">
                                        {value.title}
                                    </h3>
                                    <p className="text-base-content/70">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="open-positions" className="py-24 bg-base-200/50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                            {t("careers.openPositions.title")}
                        </h2>
                        <p className="mt-4 text-lg text-base-content/70">
                            {t("careers.openPositions.subtitle")}
                        </p>
                    </div>{" "}
                    <div className="mx-auto mt-16 max-w-5xl">
                        <div className="space-y-8">
                            {jobPositions.map((job) => (
                                <div
                                    key={job.id}
                                    className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <div className="card-body">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                                    <h3 className="card-title text-xl text-primary">
                                                        {job.title}
                                                    </h3>
                                                    <span className="badge badge-primary badge-outline">
                                                        {job.department}
                                                    </span>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-6 text-sm text-base-content/70 mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <IoLocationOutline className="w-4 h-4" />
                                                        {job.location}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <IoTimeOutline className="w-4 h-4" />
                                                        {job.type}
                                                    </div>
                                                </div>

                                                <p className="text-base-content/80 mb-6">
                                                    {job.description}
                                                </p>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-base-content mb-3">
                                                            {t(
                                                                "careers.requirements"
                                                            )}
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {job.requirements
                                                                .slice(0, 3)
                                                                .map(
                                                                    (
                                                                        req,
                                                                        index
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="flex items-start gap-2 text-sm text-base-content/70"
                                                                        >
                                                                            <IoCheckmarkCircleOutline className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                                                            {
                                                                                req
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            {job.requirements
                                                                .length > 3 && (
                                                                <li className="text-sm text-base-content/50 italic">
                                                                    +
                                                                    {job
                                                                        .requirements
                                                                        .length -
                                                                        3}{" "}
                                                                    more
                                                                    requirements...
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-semibold text-base-content mb-3">
                                                            {t(
                                                                "careers.benefits"
                                                            )}
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {job.benefits
                                                                .slice(0, 3)
                                                                .map(
                                                                    (
                                                                        benefit,
                                                                        index
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="flex items-start gap-2 text-sm text-base-content/70"
                                                                        >
                                                                            <IoCheckmarkCircleOutline className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                                            {
                                                                                benefit
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            {job.benefits
                                                                .length > 3 && (
                                                                <li className="text-sm text-base-content/50 italic">
                                                                    +
                                                                    {job
                                                                        .benefits
                                                                        .length -
                                                                        3}{" "}
                                                                    more
                                                                    benefits...
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 lg:mt-0 lg:ml-8 flex flex-col gap-3">
                                                <Link
                                                    to={`/careers/${job.id}`}
                                                    className="btn btn-outline btn-primary gap-2"
                                                >
                                                    <IoArrowForwardOutline className="w-4 h-4" />
                                                    View Details
                                                </Link>
                                                <a
                                                    href={`mailto:careers@lingano.com?subject=Application for ${job.title}`}
                                                    className="btn btn-primary gap-2"
                                                >
                                                    <IoMailOutline className="w-4 h-4" />
                                                    {t("careers.applyNow")}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-primary to-secondary">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-primary-content sm:text-4xl">
                            {t("careers.cta.title")}
                        </h2>
                        <p className="mt-4 text-lg text-primary-content/90">
                            {t("careers.cta.subtitle")}
                        </p>
                        <div className="mt-8">
                            <a
                                href="mailto:careers@lingano.com"
                                className="btn btn-neutral btn-lg gap-2"
                            >
                                <IoMailOutline className="w-5 h-5" />
                                {t("careers.cta.contactUs")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;

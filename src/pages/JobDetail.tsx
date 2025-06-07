import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import {
    IoLocationOutline,
    IoTimeOutline,
    IoPeopleOutline,
    IoCheckmarkCircleOutline,
    IoMailOutline,
    IoArrowBackOutline,
    IoCalendarOutline,
    IoCashOutline,
    IoGlobeOutline,
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
    responsibilities: string[];
    qualifications: string[];
    compensation: string;
    workModel: string;
}

interface JobDetailProps {
    darkMode?: boolean;
    setDarkMode?: (darkMode: boolean) => void;
}

const JobDetail = ({
    darkMode = false,
    setDarkMode = () => {},
}: JobDetailProps) => {
    const { t } = useTranslation();
    const { jobId } = useParams<{ jobId: string }>();

    // Scroll to top when component mounts or jobId changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [jobId]);

    // Job positions data
    const getJobPosition = (id: string): JobPosition | null => {
        const positions: { [key: string]: JobPosition } = {
            "frontend-dev": {
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
                responsibilities: t(
                    "careers.positions.frontendDev.responsibilities",
                    { returnObjects: true }
                ) as string[],
                qualifications: t(
                    "careers.positions.frontendDev.qualifications",
                    { returnObjects: true }
                ) as string[],
                compensation: t("careers.positions.frontendDev.compensation"),
                workModel: t("careers.positions.frontendDev.workModel"),
            },
            "backend-dev": {
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
                responsibilities: t(
                    "careers.positions.backendDev.responsibilities",
                    { returnObjects: true }
                ) as string[],
                qualifications: t(
                    "careers.positions.backendDev.qualifications",
                    { returnObjects: true }
                ) as string[],
                compensation: t("careers.positions.backendDev.compensation"),
                workModel: t("careers.positions.backendDev.workModel"),
            },
            "ui-ux-designer": {
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
                responsibilities: t(
                    "careers.positions.uiUxDesigner.responsibilities",
                    { returnObjects: true }
                ) as string[],
                qualifications: t(
                    "careers.positions.uiUxDesigner.qualifications",
                    { returnObjects: true }
                ) as string[],
                compensation: t("careers.positions.uiUxDesigner.compensation"),
                workModel: t("careers.positions.uiUxDesigner.workModel"),
            },
            "devops-engineer": {
                id: "devops-engineer",
                title: t("careers.positions.devopsEngineer.title"),
                department: t("careers.positions.devopsEngineer.department"),
                location: t("careers.positions.devopsEngineer.location"),
                type: t("careers.positions.devopsEngineer.type"),
                description: t("careers.positions.devopsEngineer.description"),
                requirements: t(
                    "careers.positions.devopsEngineer.requirements",
                    { returnObjects: true }
                ) as string[],
                benefits: t("careers.positions.devopsEngineer.benefits", {
                    returnObjects: true,
                }) as string[],
                responsibilities: t(
                    "careers.positions.devopsEngineer.responsibilities",
                    { returnObjects: true }
                ) as string[],
                qualifications: t(
                    "careers.positions.devopsEngineer.qualifications",
                    { returnObjects: true }
                ) as string[],
                compensation: t(
                    "careers.positions.devopsEngineer.compensation"
                ),
                workModel: t("careers.positions.devopsEngineer.workModel"),
            },
        };
        return positions[id] || null;
    };

    const job = jobId ? getJobPosition(jobId) : null;

    if (!job) {
        return (
            <div className="min-h-screen bg-base-100 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-error mb-4">
                        Job Not Found
                    </h1>
                    <p className="text-base-content/70 mb-8">
                        The position you're looking for doesn't exist.
                    </p>
                    <Link to="/careers" className="btn btn-primary">
                        Back to Careers
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-base-100">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Job Header */}
            <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <Link
                            to="/careers"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
                        >
                            <IoArrowBackOutline className="w-5 h-5" />
                            {t("jobDetail.backToCareers")}
                        </Link>

                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                                        {job.title}
                                    </h1>
                                    <span className="badge badge-primary badge-lg">
                                        {job.department}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-base-content/70">
                                        <IoLocationOutline className="w-5 h-5" />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-base-content/70">
                                        <IoTimeOutline className="w-5 h-5" />
                                        <span>{job.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-base-content/70">
                                        <IoGlobeOutline className="w-5 h-5" />
                                        <span>{job.workModel}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-base-content/70">
                                        <IoCashOutline className="w-5 h-5" />
                                        <span>{job.compensation}</span>
                                    </div>
                                </div>

                                <p className="text-lg text-base-content/80 leading-relaxed">
                                    {job.description}
                                </p>
                            </div>

                            <div className="lg:ml-8">
                                <a
                                    href={`mailto:careers@lingano.com?subject=Application for ${job.title}`}
                                    className="btn btn-primary btn-lg gap-2 w-full lg:w-auto"
                                >
                                    <IoMailOutline className="w-5 h-5" />
                                    {t("careers.applyNow")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Details */}
            <section className="py-16 bg-base-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="grid gap-12 lg:gap-16">
                            {/* Key Responsibilities */}
                            <div className="card bg-base-200 shadow-lg">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl text-primary mb-6">
                                        {t("jobDetail.responsibilities")}
                                    </h2>
                                    <ul className="space-y-3">
                                        {job.responsibilities.map(
                                            (responsibility, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3"
                                                >
                                                    <IoCheckmarkCircleOutline className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                                    <span className="text-base-content/80">
                                                        {responsibility}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>

                            {/* Requirements & Qualifications */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="card bg-base-200 shadow-lg">
                                    <div className="card-body">
                                        <h2 className="card-title text-xl text-primary mb-6">
                                            {t("careers.requirements")}
                                        </h2>
                                        <ul className="space-y-3">
                                            {job.requirements.map(
                                                (req, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <IoCheckmarkCircleOutline className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                                                        <span className="text-sm text-base-content/70">
                                                            {req}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                <div className="card bg-base-200 shadow-lg">
                                    <div className="card-body">
                                        <h2 className="card-title text-xl text-primary mb-6">
                                            {t("jobDetail.qualifications")}
                                        </h2>
                                        <ul className="space-y-3">
                                            {job.qualifications.map(
                                                (qual, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <IoCheckmarkCircleOutline className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                                                        <span className="text-sm text-base-content/70">
                                                            {qual}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Benefits & Perks */}
                            <div className="card bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl text-primary mb-6">
                                        {t("careers.benefits")}
                                    </h2>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {job.benefits.map((benefit, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 p-4 bg-base-100 rounded-lg"
                                            >
                                                <IoCheckmarkCircleOutline className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-base-content/80">
                                                    {benefit}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Application Process */}
                            <div className="card bg-base-200 shadow-lg">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl text-primary mb-6">
                                        {t(
                                            "jobDetail.applicationProcess.title"
                                        )}
                                    </h2>
                                    <div className="grid sm:grid-cols-3 gap-6">
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <IoMailOutline className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="font-semibold mb-2">
                                                {t(
                                                    "jobDetail.applicationProcess.step1.title"
                                                )}
                                            </h3>
                                            <p className="text-sm text-base-content/70">
                                                {t(
                                                    "jobDetail.applicationProcess.step1.description"
                                                )}
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <IoPeopleOutline className="w-6 h-6 text-secondary" />
                                            </div>
                                            <h3 className="font-semibold mb-2">
                                                {t(
                                                    "jobDetail.applicationProcess.step2.title"
                                                )}
                                            </h3>
                                            <p className="text-sm text-base-content/70">
                                                {t(
                                                    "jobDetail.applicationProcess.step2.description"
                                                )}
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <IoCalendarOutline className="w-6 h-6 text-accent" />
                                            </div>
                                            <h3 className="font-semibold mb-2">
                                                {t(
                                                    "jobDetail.applicationProcess.step3.title"
                                                )}
                                            </h3>
                                            <p className="text-sm text-base-content/70">
                                                {t(
                                                    "jobDetail.applicationProcess.step3.description"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Apply Now CTA */}
                            <div className="text-center py-8">
                                <h2 className="text-2xl font-bold text-base-content mb-4">
                                    {t("jobDetail.readyToApply")}
                                </h2>
                                <p className="text-base-content/70 mb-8 max-w-2xl mx-auto">
                                    {t("jobDetail.applyDescription")}
                                </p>
                                <a
                                    href={`mailto:careers@lingano.com?subject=Application for ${job.title}&body=Dear Lingano Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`}
                                    className="btn btn-primary btn-lg gap-2"
                                >
                                    <IoMailOutline className="w-5 h-5" />
                                    {t("careers.applyNow")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default JobDetail;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    IoTimeOutline,
    IoPeopleOutline,
    IoRocketOutline,
    IoHeartOutline,
    IoGlobeOutline,
    IoMailOutline,
    IoArrowForwardOutline,
    IoSchoolOutline,
    IoTrendingUpOutline,
    IoAirplaneOutline,
    IoGiftOutline,
    IoHomeOutline,
    IoLaptopOutline,
    IoCodeSlashOutline,
    IoBrushOutline,
    IoServerOutline,
    IoMegaphoneOutline,
    IoBulbOutline,
    IoSettingsOutline,
    IoTrendingUpSharp,
} from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    USFlag,
    GermanFlag,
    FrenchFlag,
    ItalianFlag,
    SwissFlag,
    PolishFlag,
} from "../components/flags/FlagComponents";

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

interface CareersProps {
    darkMode?: boolean;
    setDarkMode?: (darkMode: boolean) => void;
}

const Careers = ({
    darkMode = false,
    setDarkMode = () => {},
}: CareersProps) => {
    const { t } = useTranslation();
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All"); // Function to get department icon based on department name (Scale.com style)
    const getDepartmentIcon = (department: string) => {
        const icons = {
            Engineering: IoCodeSlashOutline,
            Design: IoBrushOutline,
            Infrastructure: IoServerOutline,
            Marketing: IoMegaphoneOutline,
            Product: IoBulbOutline,
            Operations: IoSettingsOutline,
            Sales: IoTrendingUpSharp,
            Research: IoSchoolOutline,
            Finance: IoTrendingUpOutline,
            Growth: IoRocketOutline,
        };
        return icons[department as keyof typeof icons] || IoRocketOutline;
    };

    // Function to get flag component based on location
    const getFlagComponent = (location: string) => {
        const flags = {
            "New York": USFlag,
            "San Francisco": USFlag,
            "Los Angeles": USFlag,
            Remote: USFlag, // Default to US flag for remote
            Berlin: GermanFlag,
            Munich: GermanFlag,
            Paris: FrenchFlag,
            Lyon: FrenchFlag,
            Rome: ItalianFlag,
            Milan: ItalianFlag,
            Zurich: SwissFlag,
            Geneva: SwissFlag,
            Warsaw: PolishFlag,
            Krakow: PolishFlag,
        };
        return flags[location as keyof typeof flags] || USFlag; // Default to US flag
    };

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const companyCredos = [
        {
            icon: IoRocketOutline,
            title: t("careers.credos.innovation.title"),
            description: t("careers.credos.innovation.description"),
        },
        {
            icon: IoPeopleOutline,
            title: t("careers.credos.collaboration.title"),
            description: t("careers.credos.collaboration.description"),
        },
        {
            icon: IoGlobeOutline,
            title: t("careers.credos.global.title"),
            description: t("careers.credos.global.description"),
        },
        {
            icon: IoHeartOutline,
            title: t("careers.credos.passion.title"),
            description: t("careers.credos.passion.description"),
        },
    ];

    const benefits = [
        {
            icon: IoSchoolOutline,
            title: t("careers.benefits.learning.title"),
            description: t("careers.benefits.learning.description"),
        },
        {
            icon: IoHomeOutline,
            title: t("careers.benefits.remote.title"),
            description: t("careers.benefits.remote.description"),
        },
        {
            icon: IoLaptopOutline,
            title: t("careers.benefits.equipment.title"),
            description: t("careers.benefits.equipment.description"),
        },
        {
            icon: IoTrendingUpOutline,
            title: t("careers.benefits.growth.title"),
            description: t("careers.benefits.growth.description"),
        },
        {
            icon: IoAirplaneOutline,
            title: t("careers.benefits.travel.title"),
            description: t("careers.benefits.travel.description"),
        },
        {
            icon: IoGiftOutline,
            title: t("careers.benefits.wellness.title"),
            description: t("careers.benefits.wellness.description"),
        },
    ];

    const departments = ["All", "Engineering", "Design", "Infrastructure"];
    const locations = ["All", "Remote", "Lugano", "Hybrid"];

    const filteredJobs = jobPositions.filter((job) => {
        const departmentMatch =
            selectedDepartment === "All" ||
            job.department === selectedDepartment;
        const locationMatch =
            selectedLocation === "All" ||
            job.location.includes(selectedLocation);
        return departmentMatch && locationMatch;
    });

    return (
        <div className="min-h-screen bg-base-100">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />{" "}
            {/* Hero Section */}
            <section className="careers-hero-simple-glow relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-base-content sm:text-6xl lg:text-7xl">
                            {t("careers.hero.title")}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-base-content/70 sm:text-xl">
                            {t("careers.hero.subtitle")}
                        </p>
                        <div className="mt-10">
                            <a
                                href="#open-roles"
                                className="btn btn-primary btn-lg px-8 py-4 text-lg"
                            >
                                {t("careers.hero.viewPositions")}
                                <IoArrowForwardOutline className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>{" "}
            </section>{" "}
            {/* Company Credos */}
            <section className="py-32 bg-gradient-to-br from-base-200/40 via-base-100/20 to-base-200/30 relative z-10 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-secondary/[0.02]"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full blur-3xl"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-3xl text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                            <span className="text-sm font-semibold text-primary">
                                Company Values
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl lg:text-6xl mb-6">
                            {t("careers.credos.title")}
                        </h2>
                        <p className="text-xl text-base-content/80 leading-relaxed">
                            {t("careers.credos.subtitle")}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {companyCredos.map((credo, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-base-100/80 to-base-100/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-base-300/20 hover:border-primary/30 relative overflow-hidden"
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                }}
                            >
                                {/* Card background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Icon container with enhanced styling */}
                                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/15 to-secondary/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/15 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <credo.icon className="w-7 h-7 text-primary relative z-10 group-hover:text-secondary transition-colors duration-300" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-base-content mb-4 group-hover:text-primary transition-colors duration-300">
                                        {credo.title}
                                    </h3>
                                    <p className="text-base-content/75 leading-relaxed group-hover:text-base-content/90 transition-colors duration-300">
                                        {credo.description}
                                    </p>
                                </div>
                                {/* Subtle bottom accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        ))}
                    </div>
                </div>{" "}
            </section>
            {/* Glowing Divider */}
            <div className="relative py-12">
                <div className="mx-auto max-w-4xl">
                    {/* Main glowing line */}
                    <div className="relative h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent">
                        {/* Glow effect layers */}
                        <div className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-sm"></div>
                        <div className="absolute inset-0 h-2 bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-md"></div>
                        <div className="absolute inset-0 h-4 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-lg"></div>
                    </div>
                </div>
            </div>
            {/* Benefits Section */}
            <section className="py-24 bg-base-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                            {t("careers.benefits.title")}
                        </h2>
                        <p className="mt-4 text-lg text-base-content/70">
                            {t("careers.benefits.subtitle")}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-base-200/50 transition-colors"
                            >
                                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                                    <benefit.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-base-content mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-base-content/70">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Open Roles Section */}
            <section id="open-roles" className="py-24 bg-base-200/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                            {t("careers.openRoles.title")}
                        </h2>
                        <p className="mt-4 text-lg text-base-content/70">
                            {t("careers.openRoles.subtitle")}
                        </p>
                    </div>
                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-12 justify-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">
                                    {t("careers.filters.department")}
                                </span>
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                value={selectedDepartment}
                                onChange={(e) =>
                                    setSelectedDepartment(e.target.value)
                                }
                            >
                                {departments.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept === "All"
                                            ? t(
                                                  "careers.filters.allDepartments"
                                              )
                                            : dept}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">
                                    {t("careers.filters.location")}
                                </span>
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                value={selectedLocation}
                                onChange={(e) =>
                                    setSelectedLocation(e.target.value)
                                }
                            >
                                {locations.map((loc) => (
                                    <option key={loc} value={loc}>
                                        {loc === "All"
                                            ? t("careers.filters.allLocations")
                                            : loc}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>{" "}
                    {/* Job Listings - Clean List Format like Scale AI */}
                    <div className="mx-auto max-w-full px-8">
                        {filteredJobs.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-lg text-base-content/70">
                                    {t("careers.noJobsFound")}
                                </p>
                            </div>
                        ) : (
                            <div className="bg-gradient-to-br from-base-100 via-base-100/95 to-base-200/20 backdrop-blur-md rounded-2xl border border-base-300/20 overflow-hidden shadow-2xl shadow-base-300/10 hover:shadow-3xl hover:shadow-base-300/20 transition-all duration-500 relative">
                                {/* Subtle background gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] pointer-events-none"></div>{" "}
                                {/* Header - Hidden on mobile, shown on desktop */}
                                <div className="hidden lg:block bg-gradient-to-r from-base-200/40 via-base-200/30 to-base-200/20 px-12 py-4 border-b border-base-300/30 backdrop-blur-sm relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-secondary/[0.03]"></div>{" "}
                                    <div className="grid grid-cols-12 gap-6 text-sm font-bold text-base-content/90 uppercase tracking-wider relative z-10">
                                        <div className="col-span-4 flex items-center gap-2">
                                            <div className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                                            Role
                                        </div>
                                        <div className="col-span-3 flex justify-center">
                                            Department
                                        </div>
                                        <div className="col-span-2 flex justify-center">
                                            Location
                                        </div>
                                        <div className="col-span-2 flex justify-center">
                                            Type
                                        </div>
                                        <div className="col-span-1"></div>
                                    </div>
                                </div>{" "}
                                {/* Job List */}
                                <div className="relative">
                                    {filteredJobs.map((job, index) => (
                                        <div
                                            key={job.id}
                                            className="hover:bg-gradient-to-r hover:from-primary/[0.03] hover:via-base-200/20 hover:to-secondary/[0.02] transition-all duration-300 group relative overflow-hidden border-b border-base-300/10 last:border-b-0"
                                            style={{
                                                animationDelay: `${
                                                    index * 50
                                                }ms`,
                                            }}
                                        >
                                            {/* Subtle hover effect line */}{" "}
                                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>{" "}
                                            {/* Desktop Layout */}{" "}
                                            <Link
                                                to={`/careers/${job.id}`}
                                                className="hidden lg:grid px-12 py-5 grid-cols-12 gap-6 items-center cursor-pointer relative overflow-hidden transition-all duration-300"
                                            >
                                                {/* Subtle shimmer effect on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>{" "}
                                                {/* Position */}
                                                <div className="col-span-4 relative z-10 flex items-center gap-2">
                                                    <div className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-base-content group-hover:text-primary transition-all duration-300 group-hover:drop-shadow-sm">
                                                            {job.title}
                                                        </h3>
                                                        <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-primary to-secondary mt-1 transition-all duration-300"></div>
                                                    </div>
                                                </div>{" "}                                                {/* Department */}
                                                <div className="col-span-3 relative z-10 flex justify-center">
                                                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-base-200/40 to-base-200/20 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 shadow-sm hover:shadow-md border border-base-300/20 hover:border-primary/20 w-44 justify-start">
                                                        {(() => {
                                                            const DeptIcon =
                                                                getDepartmentIcon(
                                                                    job.department
                                                                );
                                                            return (
                                                                <DeptIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                                            );
                                                        })()}
                                                        <span className="text-sm font-semibold text-base-content group-hover:text-primary/80 transition-colors duration-300 whitespace-nowrap">
                                                            {job.department}
                                                        </span>
                                                    </div>
                                                </div>{" "}
                                                {/* Location */}
                                                <div className="col-span-2 relative z-10 flex justify-center">
                                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-base-200/30 to-base-200/10 hover:from-accent/10 hover:to-accent/5 transition-all duration-300 shadow-sm border border-base-300/10 hover:border-accent/20">
                                                        {" "}
                                                        {(() => {
                                                            const FlagComponent =
                                                                getFlagComponent(
                                                                    job.location
                                                                );
                                                            return (
                                                                <FlagComponent className="w-5 h-4 rounded-sm shadow-sm" />
                                                            );
                                                        })()}
                                                        <span className="text-sm font-medium text-base-content group-hover:text-accent transition-colors duration-300 whitespace-nowrap">
                                                            {job.location}
                                                        </span>
                                                    </div>
                                                </div>{" "}
                                                {/* Type */}
                                                <div className="col-span-2 relative z-10 flex justify-center">
                                                    <div className="px-3 py-2 rounded-lg bg-gradient-to-r from-secondary/10 to-secondary/5 hover:from-secondary/15 hover:to-secondary/10 transition-all duration-300 shadow-sm border border-secondary/20 hover:border-secondary/30">
                                                        <span className="text-sm font-semibold text-base-content group-hover:text-secondary transition-colors duration-300 whitespace-nowrap">
                                                            {job.type}
                                                        </span>
                                                    </div>
                                                </div>{" "}
                                                {/* Actions */}
                                                <div className="col-span-1 relative z-10 flex justify-end">
                                                    <div
                                                        className="dropdown dropdown-end"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <div
                                                            tabIndex={0}
                                                            role="button"
                                                            className="btn btn-ghost btn-sm hover:btn-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 rounded-xl group-hover:scale-110 transform"
                                                            onClick={(e) =>
                                                                e.stopPropagation()
                                                            }
                                                        >
                                                            <IoArrowForwardOutline className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                                                        </div>
                                                        <ul
                                                            tabIndex={0}
                                                            className="dropdown-content menu bg-base-100/98 backdrop-blur-xl rounded-2xl z-[1] w-56 p-4 shadow-2xl border border-base-300/30 animate-in fade-in slide-in-from-top-2 duration-200"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to={`/careers/${job.id}`}
                                                                    className="rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200 font-medium"
                                                                >
                                                                    <IoArrowForwardOutline className="w-4 h-4" />
                                                                    {t(
                                                                        "careers.viewDetails"
                                                                    )}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href={`mailto:careers@lingano.com?subject=Application for ${job.title}`}
                                                                    className="rounded-xl hover:bg-gradient-to-r hover:from-secondary/10 hover:to-secondary/5 transition-all duration-200 font-medium"
                                                                >
                                                                    <IoMailOutline className="w-4 h-4" />
                                                                    {t(
                                                                        "careers.applyNow"
                                                                    )}
                                                                </a>
                                                            </li>{" "}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Link>
                                            {/* Mobile Layout */}
                                            <Link
                                                to={`/careers/${job.id}`}
                                                className="lg:hidden px-6 py-6 block cursor-pointer hover:bg-gradient-to-r hover:from-primary/[0.02] hover:via-base-200/10 hover:to-secondary/[0.02] transition-all duration-300 relative overflow-hidden group-hover:translate-x-1"
                                            >
                                                {/* Mobile shimmer effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                                <div className="flex justify-between items-start mb-6 relative z-10">
                                                    <div className="flex-1 pr-4">
                                                        <h3 className="text-xl font-bold text-base-content hover:text-primary transition-all duration-300 mb-2 group-hover:drop-shadow-sm">
                                                            {job.title}
                                                        </h3>
                                                        <div className="w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500"></div>
                                                    </div>
                                                    <div
                                                        className="dropdown dropdown-end"
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <div
                                                            tabIndex={0}
                                                            role="button"
                                                            className="btn btn-ghost btn-sm hover:btn-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 rounded-xl"
                                                            onClick={(e) =>
                                                                e.stopPropagation()
                                                            }
                                                        >
                                                            <IoArrowForwardOutline className="w-4 h-4" />
                                                        </div>
                                                        <ul
                                                            tabIndex={0}
                                                            className="dropdown-content menu bg-base-100/98 backdrop-blur-xl rounded-2xl z-[1] w-52 p-3 shadow-2xl border border-base-300/30"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to={`/careers/${job.id}`}
                                                                    className="rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200 font-medium"
                                                                >
                                                                    <IoArrowForwardOutline className="w-4 h-4" />
                                                                    {t(
                                                                        "careers.viewDetails"
                                                                    )}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href={`mailto:careers@lingano.com?subject=Application for ${job.title}`}
                                                                    className="rounded-xl hover:bg-gradient-to-r hover:from-secondary/10 hover:to-secondary/5 transition-all duration-200 font-medium"
                                                                >
                                                                    {" "}
                                                                    <IoMailOutline className="w-4 h-4" />
                                                                    {t(
                                                                        "careers.applyNow"
                                                                    )}
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="text-base-content/70 text-base mb-6 line-clamp-2 relative z-10 leading-relaxed">
                                                    {job.description}
                                                </p>{" "}                                                <div className="flex flex-wrap gap-4 relative z-10">
                                                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-base-200/40 to-base-200/20 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 shadow-sm border border-base-300/20 w-44 justify-start">
                                                        {(() => {
                                                            const DeptIcon =
                                                                getDepartmentIcon(
                                                                    job.department
                                                                );
                                                            return (
                                                                <DeptIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                                            );
                                                        })()}
                                                        <span className="text-sm font-semibold text-base-content">
                                                            {job.department}
                                                        </span>
                                                    </div>{" "}
                                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-base-200/30 to-base-200/10 hover:from-accent/10 hover:to-accent/5 transition-all duration-300 shadow-sm border border-base-300/10">
                                                        {(() => {
                                                            const FlagComponent =
                                                                getFlagComponent(
                                                                    job.location
                                                                );
                                                            return (
                                                                <FlagComponent className="w-5 h-4 rounded-sm shadow-sm" />
                                                            );
                                                        })()}
                                                        <span className="text-sm font-medium text-base-content">
                                                            {job.location}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-secondary/10 to-secondary/5 hover:from-secondary/15 hover:to-secondary/10 transition-all duration-300 shadow-sm border border-secondary/20">
                                                        <IoTimeOutline className="w-4 h-4 text-secondary" />
                                                        <span className="text-sm font-semibold text-base-content">
                                                            {job.type}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>{" "}
                                            {/* Divider between items (except last) */}
                                            {index <
                                                filteredJobs.length - 1 && (
                                                <div className="border-b border-base-300/30"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                            {t("careers.cta.title")}
                        </h2>
                        <p className="mt-4 text-lg text-base-content/70">
                            {t("careers.cta.subtitle")}
                        </p>
                        <div className="mt-8">
                            <a
                                href="mailto:careers@lingano.com"
                                className="btn btn-primary btn-lg px-8 py-4 gap-2"
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

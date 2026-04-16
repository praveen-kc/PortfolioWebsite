import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Praveen K C's 12+ years of experience in Unity development, XR solutions, and enterprise VR training simulations.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

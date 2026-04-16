"use client";

import { useRef, useState, useEffect } from "react";
import * as d3 from "d3";
import { useReducedMotion } from "framer-motion";

interface SkillNode extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  type: "domain" | "skill";
  domain: string;
}

interface SkillLink extends d3.SimulationLinkDatum<SkillNode> {
  source: string | SkillNode;
  target: string | SkillNode;
}

const SKILL_DATA = {
  nodes: [
    { id: "unity", label: "Unity C#", type: "domain" as const, domain: "Core" },
    { id: "xr", label: "XR Platforms", type: "domain" as const, domain: "XR" },
    { id: "graphics", label: "Graphics", type: "domain" as const, domain: "Graphics" },
    { id: "leadership", label: "Leadership", type: "domain" as const, domain: "Leadership" },
    { id: "csharp", label: "C#", type: "skill" as const, domain: "Core" },
    { id: "dots", label: "DOTS/ECS", type: "skill" as const, domain: "Core" },
    { id: "physics", label: "Physics", type: "skill" as const, domain: "Core" },
    { id: "shadergraph", label: "Shader Graph", type: "skill" as const, domain: "Core" },
    { id: "urp", label: "URP/HDRP", type: "skill" as const, domain: "Core" },
    { id: "metaquest", label: "Meta Quest", type: "skill" as const, domain: "XR" },
    { id: "htcvive", label: "HTC Vive", type: "skill" as const, domain: "XR" },
    { id: "oculus", label: "Oculus Rift", type: "skill" as const, domain: "XR" },
    { id: "arcore", label: "ARCore", type: "skill" as const, domain: "XR" },
    { id: "arkit", label: "ARKit", type: "skill" as const, domain: "XR" },
    { id: "webxr", label: "WebXR", type: "skill" as const, domain: "XR" },
    { id: "directx", label: "DirectX", type: "skill" as const, domain: "Graphics" },
    { id: "opengl", label: "OpenGL", type: "skill" as const, domain: "Graphics" },
    { id: "hlsl", label: "HLSL", type: "skill" as const, domain: "Graphics" },
    { id: "threejs", label: "Three.js", type: "skill" as const, domain: "Graphics" },
    { id: "webgl", label: "WebGL", type: "skill" as const, domain: "Graphics" },
    { id: "blender", label: "Blender", type: "skill" as const, domain: "Graphics" },
    { id: "mentoring", label: "Team Mentoring", type: "skill" as const, domain: "Leadership" },
    { id: "architecture", label: "Architecture", type: "skill" as const, domain: "Leadership" },
    { id: "agile", label: "Agile/Scrum", type: "skill" as const, domain: "Leadership" },
    { id: "client", label: "Client Eng.", type: "skill" as const, domain: "Leadership" },
  ] as SkillNode[],
  links: [
    { source: "unity", target: "csharp" },
    { source: "unity", target: "dots" },
    { source: "unity", target: "physics" },
    { source: "unity", target: "shadergraph" },
    { source: "unity", target: "urp" },
    { source: "xr", target: "metaquest" },
    { source: "xr", target: "htcvive" },
    { source: "xr", target: "oculus" },
    { source: "xr", target: "arcore" },
    { source: "xr", target: "arkit" },
    { source: "xr", target: "webxr" },
    { source: "graphics", target: "directx" },
    { source: "graphics", target: "opengl" },
    { source: "graphics", target: "hlsl" },
    { source: "graphics", target: "threejs" },
    { source: "graphics", target: "webgl" },
    { source: "graphics", target: "blender" },
    { source: "leadership", target: "mentoring" },
    { source: "leadership", target: "architecture" },
    { source: "leadership", target: "agile" },
    { source: "leadership", target: "client" },
    { source: "csharp", target: "dots" },
    { source: "shadergraph", target: "hlsl" },
    { source: "urp", target: "directx" },
    { source: "webxr", target: "threejs" },
  ] as SkillLink[],
};

const DOMAIN_COLORS: Record<string, string> = {
  Core: "#00e5a0",
  XR: "#b87dff",
  Graphics: "#3353ff",
  Leadership: "#ff6b3d",
};

export function SkillGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isMobile || !svgRef.current || prefersReducedMotion) return;

    const width = 600;
    const height = 400;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const nodes: SkillNode[] = SKILL_DATA.nodes.map(d => ({ ...d }));
    const links: SkillLink[] = SKILL_DATA.links.map(d => ({ ...d }));

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink<SkillNode, SkillLink>(links).id(d => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide<SkillNode>().radius(d => d.type === "domain" ? 50 : 30));

    const g = svg.append("g");

    const link = g.append("g")
      .selectAll<SVGLineElement, SkillLink>("line")
      .data(links)
      .join("line")
      .attr("stroke", "#2a2d3e")
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 0.6);

    const node = g.append("g")
      .selectAll<SVGGElement, SkillNode>("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "pointer");

    const dragBehavior = d3.drag<SVGGElement, SkillNode>()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(dragBehavior);

    node.append("circle")
      .attr("r", d => d.type === "domain" ? 32 : 18)
      .attr("fill", d => d.type === "domain" ? DOMAIN_COLORS[d.domain] : "#1e2130")
      .attr("stroke", d => d.type === "domain" ? "none" : "#2a2d3e")
      .attr("stroke-width", 1);

    node.append("text")
      .text(d => d.label)
      .attr("text-anchor", "middle")
      .attr("dy", d => d.type === "domain" ? 50 : 35)
      .attr("fill", "#9a97a8")
      .attr("font-size", d => d.type === "domain" ? "11px" : "9px")
      .attr("font-family", "'Inter', sans-serif")
      .attr("pointer-events", "none");

    node.on("mouseenter", (event, d) => {
      const connectedIds = new Set<string>();
      connectedIds.add(d.id);
      links.forEach(l => {
        const sourceId = typeof l.source === "object" ? l.source.id : l.source;
        const targetId = typeof l.target === "object" ? l.target.id : l.target;
        if (sourceId === d.id) connectedIds.add(targetId);
        if (targetId === d.id) connectedIds.add(sourceId);
      });

      node.selectAll<SVGCircleElement, SkillNode>("circle")
        .attr("opacity", n => connectedIds.has(n.id) ? 1 : 0.3)
        .attr("transform", n => connectedIds.has(n.id) && n.id !== d.id ? "scale(1.1)" : "scale(1)");

      link
        .attr("stroke", l => {
          const sourceId = typeof l.source === "object" ? l.source.id : l.source;
          const targetId = typeof l.target === "object" ? l.target.id : l.target;
          return sourceId === d.id || targetId === d.id ? "#3353ff" : "#2a2d3e";
        })
        .attr("stroke-width", l => {
          const sourceId = typeof l.source === "object" ? l.source.id : l.source;
          const targetId = typeof l.target === "object" ? l.target.id : l.target;
          return sourceId === d.id || targetId === d.id ? 2 : 1;
        })
        .attr("stroke-opacity", l => {
          const sourceId = typeof l.source === "object" ? l.source.id : l.source;
          const targetId = typeof l.target === "object" ? l.target.id : l.target;
          return sourceId === d.id || targetId === d.id ? 1 : 0.2;
        });
    });

    node.on("mouseleave", () => {
      node.selectAll<SVGCircleElement, SkillNode>("circle").attr("opacity", 1).attr("transform", "scale(1)");
      link
        .attr("stroke", "#2a2d3e")
        .attr("stroke-width", 1)
        .attr("stroke-opacity", 0.6);
    });

    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as SkillNode).x!)
        .attr("y1", d => (d.source as SkillNode).y!)
        .attr("x2", d => (d.target as SkillNode).x!)
        .attr("y2", d => (d.target as SkillNode).y!);

      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
    };
  }, [isMobile, prefersReducedMotion]);

  if (isMobile || prefersReducedMotion) {
    return (
      <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Core", "XR", "Graphics", "Leadership"].map((domain) => (
          <div key={domain} className="bg-surface border border-border rounded-xl p-4">
            <div
              className="w-3 h-3 rounded-full mb-3"
              style={{ backgroundColor: DOMAIN_COLORS[domain] }}
            />
            <h4 className="font-semibold text-sm text-t1 mb-2">{domain}</h4>
            <ul className="space-y-1">
              {SKILL_DATA.nodes
                .filter(n => n.type === "skill" && n.domain === domain)
                .map(skill => (
                  <li key={skill.id} className="text-xs text-t2">
                    {skill.label}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 600 400"
        className="w-full h-auto"
        style={{ maxHeight: 400 }}
      />
    </div>
  );
}

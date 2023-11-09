import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        $NEBULA Ecosystem
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/layer2.png"
          title="$NEBULA Layer 2 Scaling"
          description="Explore $NEBULA's Layer 2 solutions, offering enhanced scalability for Ethereum with reduced fees, faster transactions, and increased throughput."
        />
        <ProjectCard
          src="/defi.png"
          title="DeFi Integration Module"
          description="Dive into $NEBULA's DeFi strategies, integrating with leading protocols to offer innovative financial products on top of its robust Layer 2 framework."
        />
        <ProjectCard
          src="/Bridge.png"
          title="Cross-Chain Bridge"
          description="Bridging assets across blockchains, $NEBULA's cross-chain bridge facilitates seamless transfers between Ethereum and other leading networks."
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/staking.png"
          title="$NEBULA Staking Platform"
          description="Stake your $NEBULA tokens to secure the network and earn rewards. Our staking platform is designed for maximum efficiency and ease of use."
        />
        <ProjectCard
          src="/nft.png"
          title="NFT Marketplace Expansion"
          description="Enter the $NEBULA NFT marketplace, where Layer 2 technology enables creators and collectors to interact with low fees and instant transactions."
        />
        <ProjectCard
          src="/dao.png"
          title="Decentralized Governance"
          description="Take part in the governance of $NEBULA's Layer 2 protocol, where token holders can vote on upgrades and proposals, steering the project's future."
        />
      </div>
    </div>
  );
};

export default Projects;

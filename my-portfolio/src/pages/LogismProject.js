import React, { useEffect, useState } from 'react';
import computerImage from '../assets/images/projects/logism/computer.png';
import cpuImage from '../assets/images/projects/logism/cpu.png';
import aluImage from '../assets/images/projects/logism/alu.png';
import controlImage from '../assets/images/projects/logism/control.png';
import regfileImage from '../assets/images/projects/logism/regfile.png';
import '../styles/ProjectPage.css';
import '../styles/LogismProject.css';

function LogismProject() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxImage]);

  const openLightbox = (imageSrc, imageAlt) => {
    setLightboxImage({ src: imageSrc, alt: imageAlt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="project-page">
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="lightbox-overlay" 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer',
            padding: '2rem'
          }}
        >
          <img 
            src={lightboxImage.src} 
            alt={lightboxImage.alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              cursor: 'default',
              borderRadius: '8px',
              boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)'
            }}
          />
        </div>
      )}

      {/* Hero Section with Animated Background */}
      <div className="project-hero">
        <div className="hero-glow"></div>
        <h1 className="project-title animated-title">Custom CPU & Assembler</h1>
        <div className="project-tech-stack">
          <span className="tech-badge">Logisim</span>
          <span className="tech-badge">C++</span>
          <span className="tech-badge">MIPS Assembly</span>
          <span className="tech-badge">Digital Logic</span>
        </div>
        <p className="project-tagline">Building a Computer from the Ground Up</p>
      </div>

      <div className="project-content">
        {/* Timeline Badge */}
        <div className="timeline-badge">
          <span className="timeline-icon">📅</span>
          <span>Fall 2023 | CS 301</span>
        </div>

        {/* Main Overview Card */}
        <div className="overview-card cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🚀</span>
            Project Overview
          </h2>
          <p className="project-description">
            This ambitious project represents a complete journey through computer architecture—from the lowest level 
            of digital logic gates to high-level assembly programming. Over the course of one semester, I designed 
            and implemented a fully functional processor in Logism capable of executing complex programs, complete 
            with a custom C++ assembler that translates human-readable assembly code into machine binary instructions.
          </p>
          <p className="project-description">
            The project demonstrates deep understanding of computer organization, binary arithmetic, control flow, 
            memory management, and the intricate dance between hardware and software that makes modern computing possible.
          </p>
        </div>

        {/* Architecture Section with Image Placeholder */}
        <div className="dual-column-section">
          <div className="content-column">
            <div className="cosmic-card">
              <h2 className="section-title cosmic-title">
                <span className="title-icon">⚡</span>
                CPU Architecture
              </h2>
              <p className="section-description">
                The CPU follows a classic RISC architecture with a multi-cycle datapath implementation. Each instruction 
                passes through five distinct stages: Instruction Fetch, Decode, Execute, Memory Access, and Write Back. 
                This design maximizes efficiency while maintaining simplicity and modularity.
              </p>
              
              <div className="technical-grid">
                <div className="technical-item glow-card">
                  <div className="tech-icon">💾</div>
                  <h3>Register File</h3>
                  <p>32 general-purpose 32-bit registers implementing simultaneous dual-read and single-write operations. 
                  Register $zero is hardwired to constant zero, following MIPS convention. Built with custom D-flip-flops 
                  and multiplexers for optimal performance.</p>
                  <div className="tech-specs">
                    <span>• 32-bit width</span>
                    <span>• 2 read ports</span>
                    <span>• 1 write port</span>
                    <span>• Clock-synchronized</span>
                  </div>
                </div>

                <div className="technical-item glow-card">
                  <div className="tech-icon">🔢</div>
                  <h3>Arithmetic Logic Unit (ALU)</h3>
                  <p>Comprehensive 32-bit ALU supporting all MIPS arithmetic and logical operations. Includes dedicated 
                  hardware for multiplication and division with 64-bit HI/LO register pair for extended precision results.</p>
                  <div className="tech-specs">
                    <span>• 15+ operations</span>
                    <span>• Zero detection</span>
                    <span>• Overflow handling</span>
                    <span>• two's complement binary system</span>
                  </div>
                </div>

                <div className="technical-item glow-card">
                  <div className="tech-icon">🎛️</div>
                  <h3>Control Unit</h3>
                  <p>Finite state machine implementing the instruction decoder and control signal generator. Manages 
                  datapath multiplexers, register enables, and memory control signals through carefully designed truth tables.</p>
                  <div className="tech-specs">
                    <span>• FSM-based design</span>
                    <span>• 25+ opcodes</span>
                    <span>• Multi-cycle timing</span>
                  </div>
                </div>

                <div className="technical-item glow-card">
                  <div className="tech-icon">🗂️</div>
                  <h3>Memory System</h3>
                  <p>Architecture with separate instruction and data memory spaces. ROM for program storage 
                  with 4KB capacity, RAM for data with byte-addressable 32-bit word access.</p>
                  <div className="tech-specs">
                    <span>• 16-bit addressing</span>
                    <span>• 32-bit data bus</span>
                    <span>• 4KB ROM/RAM</span>
                    <span>• Byte-addressable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="image-column">
            <div className="image-container cosmic-card">
              <img 
                src={computerImage} 
                alt="System Architecture with BUS" 
                className="project-main-image" 
                onClick={() => openLightbox(computerImage, "System Architecture with BUS")}
                style={{ cursor: 'zoom-in' }}
              />
              <div className="image-caption">System BUS connecting CPU with peripheral controllers</div>
            </div>

            {/* Placeholder for additional architecture image */}
            <div className="image-container cosmic-card">
              <img 
                src={cpuImage} 
                alt="CPU Datapath Architecture" 
                className="project-main-image" 
                onClick={() => openLightbox(cpuImage, "CPU Datapath Architecture")}
                style={{ cursor: 'zoom-in' }}
              />
              <div className="image-caption">Complete CPU datapath with all components</div>
            </div>
          </div>
        </div>

        {/* Assembler Section */}
        <div className="cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🔧</span>
            Custom C++ Assembler
          </h2>
          <p className="section-description">
            The assembler I coded is a two-pass program that translates MIPS assembly language into binary machine code. 
            It processes assembly files, identifies and stores labels in symbol tables, handles static memory 
            directives, and generates two separate binary output files—one for instructions and one for static data—
            ready to be loaded directly into Logisim memory modules.
          </p>

          <div className="feature-grid">
            <div className="feature-card glow-card">
              <h3>🎯 Two-Pass Processing</h3>
              <p>First pass scans all input files to build a symbol table mapping labels to line numbers and 
              static memory addresses. Second pass encodes each instruction into binary using the symbol table 
              to resolve label references.</p>
            </div>

            <div className="feature-card glow-card">
              <h3>📝 Instruction Encoding</h3>
              <p>Supports R-type (add, sub, slt, mult, div, shifts), I-type (addi, beq, bne, lw, sw, la), 
              and J-type (j, jal) instructions. Each instruction is encoded into 32-bit binary format with 
              proper opcode, register, and immediate field placement.</p>
            </div>

            <div className="feature-card glow-card">
              <h3>�️ Static Memory Handling</h3>
              <p>Processes .data section directives to allocate and initialize static memory. Supports .word 
              for numeric data and label references. Generates a separate binary file containing the static 
              memory image with end-of-memory marker.</p>
            </div>

            <div className="feature-card glow-card">
              <h3>💾 Dual Binary Output</h3>
              <p>Produces two binary files: one for instruction memory and one for static data memory. Both 
              files are formatted for direct import into Logisim's ROM/RAM components, enabling immediate 
              CPU testing.</p>
            </div>
          </div>

          <div className="code-showcase" style={{ marginTop: '2rem' }}>
            <h3>Usage Example</h3>
            <pre className="code-example">{`# Compile one or more assembly files
./assemble program.asm static_memory.bin instructions.bin
./assemble file1.asm file2.asm static_mem.bin inst.bin

# Example assembly code structure
.data
array: .word 10 20 30

.text
main:
    la $t0, array       # Load array address
    lw $t1, 0($t0)      # Load first element
    addi $t1, $t1, 5    # Add 5 to value
    sw $t1, 0($t0)      # Store result back
    j main              # Jump back to main`}</pre>
          </div>
        </div>

        {/* Implementation Journey */}
        <div className="cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🛤️</span>
            Implementation Journey
          </h2>
          
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content glow-card">
                <h3>Assembler Development</h3>
                <p>Started by building the C++ assembler to translate MIPS assembly into binary machine code. 
                Implemented two-pass processing for label resolution, instruction encoding for R-type, I-type, 
                and J-type formats, and generated separate binary outputs for instructions and static data.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content glow-card">
                <h3>CPU Circuit Design</h3>
                <p>Designed and built the CPU in Logisim starting with fundamental components. Created the ALU, 
                register file, control unit FSM, and memory modules. Tested individual circuits before integration 
                to ensure proper functionality and timing.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content glow-card">
                <h3>System Bus & Controllers</h3>
                <p>Implemented the system bus architecture connecting the CPU with various peripheral controllers. 
                Built memory controller, keyboard controller, RGB display controller, terminal controller, and 
                joystick controller. Established memory-mapped I/O for device communication.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content glow-card">
                <h3>Kernel Development</h3>
                <p>Wrote a basic kernel entirely in MIPS assembly to manage system resources and I/O operations. 
                Implemented interrupt handling, device drivers, and system calls to provide a foundation for 
                running programs on the custom CPU.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content glow-card">
                <h3>Game Development in MIPS</h3>
                <p>Created playable games written entirely in MIPS assembly, including a fully functional Pong 
                implementation. Integrated joystick input handling, collision detection, score tracking, and 
                graphical rendering—all running on the custom hardware.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Placeholders for Screenshots */}
        <div className="gallery-section">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">📸</span>
            Project Gallery
          </h2>
          
          <div className="image-gallery" style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem' }}>
            <div className="gallery-item cosmic-card" style={{ minWidth: '300px', flex: '0 0 auto' }}>
              <div className="image-container" style={{ width: '100%', height: '200px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={aluImage} 
                  alt="ALU Circuit Design" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'zoom-in' }} 
                  onClick={() => openLightbox(aluImage, "ALU Circuit Design")}
                />
              </div>
              <div className="image-caption">32-bit ALU with all arithmetic operations</div>
            </div>

            <div className="gallery-item cosmic-card" style={{ minWidth: '300px', flex: '0 0 auto' }}>
              <div className="image-container" style={{ width: '100%', height: '200px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={regfileImage} 
                  alt="Register File Implementation" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'zoom-in' }} 
                  onClick={() => openLightbox(regfileImage, "Register File Implementation")}
                />
              </div>
              <div className="image-caption">32-register file with read/write ports</div>
            </div>

            <div className="gallery-item cosmic-card" style={{ minWidth: '300px', flex: '0 0 auto' }}>
              <div className="image-container" style={{ width: '100%', height: '200px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={controlImage} 
                  alt="Control Unit FSM" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'zoom-in' }} 
                  onClick={() => openLightbox(controlImage, "Control Unit FSM")}
                />
              </div>
              <div className="image-caption">Control unit finite state machine</div>
            </div>

            <div className="gallery-item image-placeholder cosmic-card" style={{ minWidth: '300px', flex: '0 0 auto' }}>
              <div className="placeholder-content" style={{ width: '100%', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span className="placeholder-icon">🖼️</span>
                <p>Pong Game Running</p>
              </div>
              <div className="image-caption">Playable Pong game on custom CPU</div>
            </div>
          </div>
        </div>

        {/* Achievements & Stats */}
        <div className="stats-section">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🏆</span>
            Project Achievements
          </h2>
          
          <div className="stats-grid">
            <div className="stat-card cosmic-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">MIPS Instructions</div>
              <p>Full support for arithmetic, logical, memory, and branch operations</p>
            </div>

            <div className="stat-card cosmic-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Major Components</div>
              <p>ALU, Register File, Control Unit, Memory, I/O, Program Counter</p>
            </div>

            <div className="stat-card cosmic-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Logic Gates</div>
              <p>Complex circuit with optimized critical path design</p>
            </div>

            <div className="stat-card cosmic-card">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Lines of Code</div>
              <p>C++ assembler with full error handling and optimization</p>
            </div>
          </div>
        </div>

        {/* Bonus Features */}
        <div className="cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">✨</span>
            Bonus Features & Extensions
          </h2>
          
          <div className="feature-grid">
            <div className="bonus-feature glow-card">
              <div className="feature-icon">🎮</div>
              <h3>Interactive Pong Game</h3>
              <p>Fully playable Pong implementation running on custom CPU. Features joystick input, 
              display output, collision detection, and score tracking—all implemented in MIPS assembly 
              and executed on custom hardware.</p>
            </div>

            <div className="bonus-feature glow-card">
              <div className="feature-icon">🔤</div>
              <h3>ASCII String Support</h3>
              <p>Extended memory system to support .asciiz directive for string storage. Implemented 
              character-by-character loading and null-termination for C-style string handling in assembly programs.</p>
            </div>

            <div className="bonus-feature glow-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom ALU Operations</h3>
              <p>Added beyond-spec operations including bitwise and, or, xor, nor, and specialized count 
              leading ones (clo) and count leading zeros (clz) instructions for advanced bit manipulation.</p>
            </div>

            <div className="bonus-feature glow-card">
              <div className="feature-icon">🕹️</div>
              <h3>I/O Controller System</h3>
              <p>Memory-mapped I/O system supporting keyboard input, joystick control, and bitmap display output. 
              Allows interactive programs with real-time user input and graphical feedback.</p>
            </div>
          </div>
        </div>

        {/* Technical Challenges */}
        <div className="cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🧩</span>
            Technical Challenges Overcome
          </h2>
          
          <div className="challenges-list">
            <div className="challenge-item glow-card">
              <h3>🔧 Timing Synchronization</h3>
              <p>Ensuring all components operated correctly within clock cycle constraints required careful 
              analysis of propagation delays and strategic placement of registers to avoid race conditions.</p>
            </div>

            <div className="challenge-item glow-card">
              <h3>🐛 Debugging Complex Circuits</h3>
              <p>Tracing errors through thousands of gates required systematic testing methodology and custom 
              test benches. Developed incremental testing strategy building from simple to complex programs.</p>
            </div>

            <div className="challenge-item glow-card">
              <h3>🔄 Assembler Symbol Resolution</h3>
              <p>Forward reference handling in two-pass assembly required careful bookkeeping of unresolved 
              labels and backpatching of instruction addresses after symbol table completion.</p>
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="cosmic-card outcomes-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🎓</span>
            Key Learning Outcomes
          </h2>
          
          <div className="outcomes-grid">
            <div className="outcome-item">
              <span className="outcome-icon">💡</span>
              <h3>Hardware-Software Interface</h3>
              <p>Deep understanding of how high-level code translates to machine instructions and how 
              hardware executes those instructions at the gate level.</p>
            </div>

            <div className="outcome-item">
              <span className="outcome-icon">⚙️</span>
              <h3>Digital Logic Design</h3>
              <p>Mastery of combinational and sequential circuit design, timing analysis, and optimization 
              techniques for complex digital systems.</p>
            </div>

            <div className="outcome-item">
              <span className="outcome-icon">📚</span>
              <h3>Computer Architecture</h3>
              <p>Comprehensive knowledge of CPU organization, instruction set architecture, memory hierarchy, 
              and datapath control mechanisms.</p>
            </div>

            <div className="outcome-item">
              <span className="outcome-icon">🔨</span>
              <h3>Systems Programming</h3>
              <p>Experience with low-level programming, binary file I/O, parsing algorithms, and building 
              developer tools from scratch.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section cosmic-card">
          <h2>Interested in the Technical Details?</h2>
          <p>This project demonstrates comprehensive understanding of computer architecture from transistors to assembly language. 
          Feel free to reach out for more in-depth discussion about the implementation or to see the complete source code.</p>
          <button className="cta-button" onClick={() => window.history.back()}>
            ← Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogismProject;

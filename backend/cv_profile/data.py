CV_DATA = {
    "basics": {
        "name": "Mingun Kim",
        "headline": "Electrical and Electronic Engineering student focused on optimization, embedded AI systems, and practical AI deployment.",
        "email": "rlaalsrjswww@yonsei.ac.kr",
        "phone": "+82-10-5116-0158",
        "location": "Yeonhui-dong, Seodaemun-gu, Seoul, South Korea",
        "github": "https://github.com/mingunkim123/",
    },
    "education": [
        {
            "institution": "Yonsei University",
            "location": "Seoul, South Korea",
            "period": "Mar 2020 - Present",
            "degree": "B.S. in Electrical and Electronic Engineering",
            "details": [
                "Cumulative GPA: 3.58 / 4.3",
                "Major GPA: 3.8 / 4.3",
            ],
        }
    ],
    "experience": [
        {
            "organization": "Republic of Korea Army, Baekdu Mountain Unit",
            "role": "Service Member",
            "location": "Yanggu, South Korea",
            "period": "May 17, 2021 - Nov 11, 2022",
            "summary": "Completed mandatory military service while maintaining strong technical growth trajectory.",
        },
        {
            "organization": "ASO (AI Systems Optimization) Laboratory",
            "role": "Undergraduate Research Intern",
            "location": "Seoul, South Korea",
            "period": "May 2025 - Oct 2025",
            "summary": "Analyzed SIMT execution and Tensor Core pipeline behavior of NVIDIA GPUs and optimized CUTLASS-based kernels on Ampere GPUs.",
            "highlights": [
                "Studied Hopper and Blackwell architecture behavior and mapped theory to implementation constraints.",
                "Improved GEMM throughput through tile scheduling and shared-memory layout changes.",
                "Used profiler-driven memory hierarchy analysis to tune pipeline depth and latency bottlenecks.",
            ],
        },
        {
            "organization": "Hecate",
            "role": "Head of Product Development",
            "location": "Seoul, South Korea",
            "period": "Oct 2025 - Present",
            "summary": "Leading development of an emotion-aware smart wearable device for dogs, overseeing embedded system architecture, PCB and firmware design.",
        },
        {
            "organization": "Yonsei University EdgeAI Lab",
            "role": "Intern",
            "location": "Seoul, South Korea",
            "period": "Feb 2026 - Present",
            "summary": "Working on Edge AI model deployment and optimization for practical on-device inference systems.",
        },
    ],
    "awards": [
        {
            "title": "Embedded Software Contest (Automotive/Mobility Division)",
            "result": "Finalist",
            "year": "2025",
            "description": "Built an autonomous flood-escape embedded system with Raspberry Pi, Hailo-8 inference, and STM32 real-time control.",
        },
        {
            "title": "GIST AI Creative Convergence Competition",
            "result": "Grand Prize (Table Tennis Robot Category)",
            "year": "2025",
            "description": "Developed a table-tennis-playing robot with vision-based ball tracking and high-speed actuation.",
        },
    ],
    "skills": {
        "languages": ["Python", "C", "C++", "Verilog"],
        "frameworks": [
            "CUDA",
            "CUTLASS",
            "PyTorch",
            "TensorFlow Lite",
            "OpenCV",
            "TensorRT",
            "Django DRF",
        ],
        "embedded_platforms": [
            "Raspberry Pi",
            "Jetson",
            "Coral TPU",
            "Hailo-8",
            "STM32",
            "ESP32",
            "FPGA",
        ],
        "tools": ["Git", "Linux", "Docker", "GitHub Actions"],
    },
    "activities": [
        {
            "title": "President, Robotics Club Roboin (Yonsei University)",
            "period": "Jul 2025 - Jan 2026",
            "description": "Led a 60+ member robotics club and supervised autonomous systems and robotics software projects.",
        },
    ],
    "projects": [
        {
            "name": "Ledger Agent",
            "description": "Built an AI-based expense ledger assistant that records spending from natural language input and auto-categorizes transactions.\nDesigned it for quick daily logging with clear monthly summaries and lightweight budget tracking.",
            "stack": ["AI Agent", "Personal Finance"],
        },
        {
            "name": "Privacy-TMO",
            "description": "Extended the MobiHoc 2025 TMO framework with privacy-aware multimodal LLM offloading, routing, and budget-aware RL optimization.",
            "stack": ["LLM", "LoRA", "Reinforcement Learning", "Edge-Cloud Inference"],
        },
        {
            "name": "IoT Pet Monitoring Platform",
            "description": "Built an end-to-end system with ESP32-CAM firmware, FastAPI backend, Flutter app, and Docker-based CI/CD deployment.",
            "stack": ["ESP32", "FastAPI", "Flutter", "PostgreSQL", "Docker"],
        },
        {
            "name": "Flood-Escape Embedded System",
            "description": "Integrated STM32, Raspberry Pi, and Hailo-8 with FreeRTOS scheduling, CRC protocol, voice recognition, and an FSM safety controller.",
            "stack": ["STM32", "Raspberry Pi", "Hailo-8", "FreeRTOS"],
        },
        {
            "name": "MLOps Autonomous RC Car",
            "description": "Implemented end-to-end MCP pipeline including dataset creation, model training, edge deployment, and continuous updates.",
            "stack": ["MLOps", "On-device AI", "Sensor Fusion"],
        },
        {
            "name": "CUDA CUTLASS Kernel Optimization",
            "description": "Tuned tile sizes and data layouts on RTX 3060 to improve GEMM throughput and understand compiler-runtime interactions.",
            "stack": ["CUDA", "CUTLASS", "GPU Profiling"],
        },
        {
            "name": "Autonomous Paddle Robot",
            "description": "Built navigation with camera and LiDAR sensor fusion on Raspberry Pi for autonomous movement.",
            "stack": ["Raspberry Pi", "OpenCV", "LiDAR"],
        },
        {
            "name": "Plant Disease Detection System",
            "description": "Deployed a quantized INT8 TensorFlow Lite model on Coral Edge TPU and Raspberry Pi.",
            "stack": ["Coral Edge TPU", "TensorFlow Lite", "Model Quantization"],
        },
    ],
    "interests": [
        "LLM Inference and Deployment",
        "LoRA and QLoRA Fine-Tuning",
        "Model Quantization (INT8 and FP8)",
        "Hardware Accelerators",
        "Embedded AI Systems",
        "System Programming",
    ],
}

"use client";

import {
  Box,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import CustomButton from "../elements/Button";

/* =========================
   SKILL DATA
========================= */

const programmingLanguages = [
  // General / Web
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C",
  "C++",
  "C#",
  "Go",
  "PHP",
  "Ruby",
  "Rust",
  "Swift",

  // Data
  "SQL",
  "NoSQL",
  "R",
  "Scala",

  // Scripting
  "Bash",
  "PowerShell",
];

const platformsAndTools = [
  // DevOps
  "Docker",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "Jenkins",
  "GitHub Actions",
  "GitLab CI",
  "ArgoCD",

  // Cloud
  "AWS",
  "Azure",
  "Google Cloud",

  // Data
  "Apache Spark",
  "Airflow",
  "Kafka",
  "Snowflake",
  "BigQuery",
  "Redshift",

  // Observability
  "Prometheus",
  "Grafana",
  "ELK Stack",
];

export const MentorForm = () => {
  return (
    <Box className="relative h-[100svh] overflow-y-auto overscroll-contain">
      <Box className="pt-36 pb-28 px-6">
        <Box className="mx-auto max-w-5xl">
          
          {/* HEADER */}
          <Box className="text-center">
            <Typography
              variant="h3"
              className="font-semibold text-neutral-900 leading-tight"
              gutterBottom
            >
              Become a{" "}
              <span className="text-yellow-400 font-semibold">
                Mentor
              </span>
            </Typography>

            <Typography
              className="
                mt-5
                text-neutral-600
                text-lg
                max-w-l
                mx-auto
                leading-relaxed
              "
            >
              Share your experience, guide upcoming engineers, and shape the
              future of technology — one mentee at a time.
            </Typography>
          </Box>

          {/* FORM CARD */}
          <Box
            className="
              mt-14
              mx-auto
              max-w-2xl
              rounded-2xl
              bg-white
              px-8 sm:px-10
              py-10 sm:py-12
              shadow-[0_25px_80px_rgba(0,0,0,0.12)]
              ring-1 ring-black/5
            "
          >
            <Box component="form" className="space-y-9" noValidate>

              {/* BASIC INFO */}
              <TextField label="Full name" fullWidth />
              <TextField label="Email address" type="email" fullWidth />
              <TextField label="Phone number" type="tel" fullWidth />

              {/* AREA OF FOCUS */}
              <FormControl>
                <FormLabel className="text-sm text-neutral-700 mb-2">
                  Area of focus
                </FormLabel>
                <RadioGroup row>
                  <FormControlLabel value="engineering" control={<Radio />} label="Software Engineering" />
                  <FormControlLabel value="data" control={<Radio />} label="Data & Analytics" />
                  <FormControlLabel value="devops" control={<Radio />} label="DevOps / Cloud" />
                </RadioGroup>
              </FormControl>

              {/* PRIMARY EXPERTISE */}
              <TextField select label="Primary expertise" fullWidth>
                {/* Engineering */}
                <MenuItem value="frontend">Frontend Development</MenuItem>
                <MenuItem value="backend">Backend Development</MenuItem>
                <MenuItem value="fullstack">Full Stack Development</MenuItem>
                <MenuItem value="mobile">Mobile Development</MenuItem>

                {/* Data */}
                <MenuItem value="data-analytics">Data Analytics</MenuItem>
                <MenuItem value="data-engineering">Data Engineering</MenuItem>
                <MenuItem value="ml">Machine Learning</MenuItem>

                {/* DevOps */}
                <MenuItem value="devops">DevOps Engineering</MenuItem>
                <MenuItem value="cloud">Cloud Engineering</MenuItem>
                <MenuItem value="platform">Platform Engineering</MenuItem>
              </TextField>

              {/* EXPERIENCE */}
              <TextField select label="Years of experience" fullWidth>
                <MenuItem value="0-2">0–2 years</MenuItem>
                <MenuItem value="3">3 years</MenuItem>
                <MenuItem value="4">4 years</MenuItem>
                <MenuItem value="5">5 years</MenuItem>
                <MenuItem value="5+">Over 5 years</MenuItem>
              </TextField>

              {/* PROGRAMMING LANGUAGES */}
              <FormControl>
                <FormLabel className="text-sm text-neutral-700 mb-3">
                  Programming languages
                </FormLabel>

                <Box className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                  {programmingLanguages.map((lang) => (
                    <FormControlLabel
                      key={lang}
                      control={<Checkbox size="small" />}
                      label={lang}
                    />
                  ))}
                </Box>
              </FormControl>

              {/* PLATFORMS & TOOLS */}
              <FormControl>
                <FormLabel className="text-sm text-neutral-700 mb-3">
                  Platforms & tools
                </FormLabel>

                <Box className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                  {platformsAndTools.map((tool) => (
                    <FormControlLabel
                      key={tool}
                      control={<Checkbox size="small" />}
                      label={tool}
                    />
                  ))}
                </Box>
              </FormControl>

              {/* LINKS */}
              <TextField label="Portfolio / Personal website" fullWidth />
              <TextField label="LinkedIn profile" fullWidth />
              <TextField label="GitHub / GitLab profile" fullWidth />

              {/* CTA */}
              <CustomButton
                fullWidth
                className="
                  h-[56px]
                  mt-6
                  bg-yellow-600
                  hover:bg-yellow-500
                  shadow-md
                  hover:shadow-lg
                  rounded-md
                  transition-all
                  text-base
                "
              >
                Register as Mentor
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

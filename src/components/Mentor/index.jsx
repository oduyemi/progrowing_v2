"use client";
import { useState, useEffect } from "react";
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
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";


const programmingLanguages = [
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
  "SQL",
  "NoSQL",
  "R",
  "Scala",
  "Bash",
  "PowerShell",
];

const platformsAndTools = [
  "Docker",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "Jenkins",
  "GitHub Actions",
  "GitLab CI",
  "ArgoCD",
  "AWS",
  "Azure",
  "Google Cloud",
  "Apache Spark",
  "Airflow",
  "Kafka",
  "Snowflake",
  "BigQuery",
  "Redshift",
  "Prometheus",
  "Grafana",
  "ELK Stack",
];

export const MentorForm = () => {
  const [status, setStatus] = useState("idle"); 
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    if (toast.open && toast.severity === "success") {
      const timer = setTimeout(() => {
        setToast((t) => ({ ...t, open: false }));
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [toast]);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.currentTarget;
    const data = new FormData(form);
  
    // 🕷 Honeypot check
    if (data.get("company")) return;
  
    setStatus("submitting");
  
    try {
      const res = await fetch("https://formspree.io/f/mpqzeakd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
  
      if (res.ok) {
        form.reset();
        setToast({
          open: true,
          message: "Mentor registration submitted successfully!",
          severity: "success",
        });
      } else {
        throw new Error();
      }
    } catch {
      setToast({
        open: true,
        message: "Submission failed. Please try again.",
        severity: "error",
      });
    } finally {
      setStatus("idle");
    }
  };  

  return (
    <Box className="relative h-[100svh] overflow-y-auto overscroll-contain">
      <Box className="pt-36 pb-28 px-6">
        <Box className="mx-auto max-w-5xl">

          {/* HEADER */}
          <Box className="text-center">
            <Typography variant="h3" className="font-semibold text-neutral-900">
              Become a <span className="text-yellow-400">Mentor</span>
            </Typography>

            <Typography className="mt-5 text-neutral-600 text-lg max-w-l mx-auto">
              Share your experience, guide upcoming engineers, and shape the
              future of technology — one mentee at a time.
            </Typography>
          </Box>

          {/* FORM CARD */}
          <Box className="mt-14 mx-auto max-w-2xl rounded-2xl bg-white px-8 py-10 shadow-xl">
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <Box
              component="form"
              onSubmit={handleSubmit}
              className="space-y-9"
            >

              {/* Formspree Meta */}
              <input type="hidden" name="_subject" value="New Mentor Registration" />

              {/* BASIC INFO */}
              <TextField name="full_name" label="Full name" fullWidth required />
              <TextField name="email" label="Email address" type="email" fullWidth required />
              <TextField name="phone" label="Phone number" type="tel" fullWidth />

              {/* AREA OF FOCUS */}
              <FormControl>
                <FormLabel className="text-sm text-neutral-700 mb-2">
                  Area of focus
                </FormLabel>
                <RadioGroup row name="area_of_focus">
                  <FormControlLabel value="software-engineering" control={<Radio />} label="Software Engineering" />
                  <FormControlLabel value="data-analytics" control={<Radio />} label="Data & Analytics" />
                  <FormControlLabel value="devops-cloud" control={<Radio />} label="DevOps / Cloud" />
                  <FormControlLabel value="sysadmin" control={<Radio />} label="Systems Admin / Infrastructure" />
                </RadioGroup>
              </FormControl>

              {/* PRIMARY EXPERTISE */}
              <TextField name="primary_expertise" select label="Primary expertise" fullWidth>
                <MenuItem value="frontend">Frontend Development</MenuItem>
                <MenuItem value="backend">Backend Development</MenuItem>
                <MenuItem value="fullstack">Full Stack Development</MenuItem>
                <MenuItem value="mobile">Mobile Development</MenuItem>
                <MenuItem value="sys-admin">Systems Admin</MenuItem>
                <MenuItem value="data-analytics">Data Analytics</MenuItem>
                <MenuItem value="data-engineering">Data Engineering</MenuItem>
                <MenuItem value="machine-learning">Machine Learning</MenuItem>
                <MenuItem value="devops">DevOps Engineering</MenuItem>
                <MenuItem value="cloud">Cloud Engineering</MenuItem>
                <MenuItem value="platform">Platform Engineering</MenuItem>
              </TextField>

              {/* EXPERIENCE */}
              <TextField name="experience_years" select label="Years of experience" fullWidth>
                {/* <MenuItem value="0-2">0–2 years</MenuItem> */}
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
                      control={<Checkbox size="small" name="languages[]" value={lang} />}
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
                      control={<Checkbox size="small" name="tools[]" value={tool} />}
                      label={tool}
                    />
                  ))}
                </Box>
              </FormControl>

              {/* LINKS */}
              <TextField name="portfolio" label="Portfolio / Personal website" fullWidth />
              <TextField name="linkedin" label="LinkedIn profile" fullWidth />
              <TextField name="github" label="GitHub / GitLab profile" fullWidth />

              {/* CTA */}
              <CustomButton
                type="submit"
                disabled={status === "submitting"}
                fullWidth
                className="h-[56px] bg-yellow-600 hover:bg-yellow-500"
              >
                {status === "submitting" ? "Submitting..." : "Register as Mentor"}
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={toast.open}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast((t) => ({ ...t, open: false }))}
          severity={toast.severity}
          variant="filled"
          sx={{ borderRadius: 2 }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

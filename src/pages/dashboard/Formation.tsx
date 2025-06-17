import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Shield, 
  Target, 
  Award,
  PlayCircle,
  FileText,
  Lightbulb,
  BarChart3
} from 'lucide-react';

const Formation = () => {
  const modules = [
    {
      id: 1,
      title: "Introduction au Capital Innovation",
      duration: "45 min",
      difficulty: "Débutant",
      description: "Comprendre les bases du financement d'innovation et l'écosystème startup",
      topics: [
        "Qu'est-ce que le capital innovation ?",
        "Types de financement (seed, série A, B, C)",
        "Acteurs de l'écosystème",
        "Cycle de vie d'une startup"
      ],
      completed: true
    },
    {
      id: 2,
      title: "Évaluation des Startups",
      duration: "60 min",
      difficulty: "Intermédiaire",
      description: "Apprendre à analyser et évaluer le potentiel d'une startup",
      topics: [
        "Méthodes de valorisation",
        "Analyse du business model",
        "Évaluation de l'équipe fondatrice",
        "Analyse de marché et concurrence"
      ],
      completed: true
    },
    {
      id: 3,
      title: "Gestion des Risques",
      duration: "50 min",
      difficulty: "Intermédiaire",
      description: "Identifier, évaluer et mitiger les risques d'investissement",
      topics: [
        "Types de risques en investissement",
        "Stratégies de diversification",
        "Due diligence approfondie",
        "Indicateurs de performance clés"
      ],
      completed: false
    },
    {
      id: 4,
      title: "Portfolio Management",
      duration: "55 min",
      difficulty: "Avancé",
      description: "Optimiser et gérer efficacement votre portefeuille d'investissements",
      topics: [
        "Construction de portefeuille",
        "Rébalancement et optimisation",
        "Suivi des performances",
        "Stratégies de sortie"
      ],
      completed: false
    },
    {
      id: 5,
      title: "Aspects Juridiques et Réglementaires",
      duration: "40 min",
      difficulty: "Avancé",
      description: "Comprendre le cadre légal et réglementaire des investissements",
      topics: [
        "Structures juridiques",
        "Réglementation financière",
        "Droits des investisseurs",
        "Fiscalité des investissements"
      ],
      completed: false
    },
    {
      id: 6,
      title: "Technologies Blockchain et IA",
      duration: "65 min",
      difficulty: "Avancé",
      description: "Impact des nouvelles technologies sur l'investissement",
      topics: [
        "Blockchain dans la finance",
        "IA pour l'analyse d'investissement",
        "Smart contracts",
        "Tokenisation des actifs"
      ],
      completed: false
    }
  ];

  const learningObjectives = [
    "Maîtriser les fondamentaux du capital innovation",
    "Développer des compétences d'analyse et d'évaluation",
    "Comprendre la gestion des risques",
    "Optimiser la construction de portefeuille",
    "Naviguer dans l'environnement réglementaire",
    "Exploiter les technologies émergentes"
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'success';
      case 'Intermédiaire': return 'warning';
      case 'Avancé': return 'error';
      default: return 'outline';
    }
  };

  const completedModules = modules.filter(m => m.completed).length;
  const progressPercentage = (completedModules / modules.length) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Formation Investissement</h1>
              <p className="text-primary-100 text-lg">
                Développez vos compétences en capital innovation et investissement startup
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">{completedModules}/{modules.length}</div>
              <div className="text-primary-100">Modules complétés</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Progression globale</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-primary-600 rounded-full h-3">
              <div 
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Learning Objectives */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary-500" />
              Objectifs Pédagogiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningObjectives.map((objective, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{objective}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: "Durée Totale",
            value: "5h 15min",
            icon: <Clock className="w-6 h-6 text-primary-500" />,
            delay: 0.2
          },
          {
            title: "Modules",
            value: "6",
            icon: <BookOpen className="w-6 h-6 text-secondary-500" />,
            delay: 0.3
          },
          {
            title: "Certificat",
            value: "Inclus",
            icon: <Award className="w-6 h-6 text-accent-500" />,
            delay: 0.4
          },
          {
            title: "Niveau",
            value: "Tous niveaux",
            icon: <BarChart3 className="w-6 h-6 text-warning-500" />,
            delay: 0.5
          }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stat.delay }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-gray-600 text-sm">{stat.title}</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Course Modules */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-primary-500" />
              Contenu de la Formation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border rounded-lg p-6 ${
                    module.completed ? 'bg-success-50 border-success-200' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          module.completed ? 'bg-success-500' : 'bg-gray-300'
                        }`}>
                          {module.completed ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <span className="text-white font-semibold">{module.id}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                          <div className="flex items-center gap-3 mt-1">
                            <Badge variant={getDifficultyColor(module.difficulty)} size="sm">
                              {module.difficulty}
                            </Badge>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {module.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{module.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Sujets couverts :</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start text-sm text-gray-600">
                              <Lightbulb className="w-4 h-4 mr-2 mt-0.5 text-accent-500 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="ml-6">
                      {module.completed ? (
                        <Button variant="outline" size="sm" icon={<FileText size={16} />}>
                          Revoir
                        </Button>
                      ) : (
                        <Button variant="primary" size="sm" icon={<PlayCircle size={16} />}>
                          Commencer
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Additional Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-secondary-500" />
              Supports Remis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Guide Pratique",
                  description: "Manuel complet de l'investisseur avec templates et checklists",
                  icon: <FileText className="w-8 h-8 text-primary-500" />
                },
                {
                  title: "Outils d'Analyse",
                  description: "Calculateurs de valorisation et modèles financiers Excel",
                  icon: <BarChart3 className="w-8 h-8 text-secondary-500" />
                },
                {
                  title: "Ressources Légales",
                  description: "Templates de contrats et documentation juridique",
                  icon: <Shield className="w-8 h-8 text-accent-500" />
                }
              ].map((resource, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mr-4">
                      {resource.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm" fullWidth>
                    Télécharger
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Modalités d'Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-warning-500" />
              Modalités d'Animation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Format de Formation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Modules interactifs en ligne</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Études de cas pratiques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Quiz d'évaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Sessions Q&A en direct</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Accompagnement</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Mentoring personnalisé</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Communauté d'investisseurs</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Certification finale</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Support technique 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2">Prêt à commencer votre formation ?</h3>
                  <p className="text-primary-700">
                    Développez vos compétences d'investisseur et maximisez vos opportunités
                  </p>
                </div>
                <Button variant="primary" size="lg" icon={<PlayCircle size={20} />}>
                  Commencer la Formation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Formation;
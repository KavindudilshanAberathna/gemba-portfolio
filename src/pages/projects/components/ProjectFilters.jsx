import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilters = ({ 
  categories, 
  technologies, 
  selectedCategory, 
  selectedTechnology, 
  onCategoryChange, 
  onTechnologyChange,
  onClearFilters 
}) => {
  const hasActiveFilters = selectedCategory !== 'All' || selectedTechnology !== 'All';

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Category Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">
              Category
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e?.target?.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer"
              >
                {categories?.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Icon 
                name="ChevronDown" 
                size={16} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" 
              />
            </div>
          </div>

          {/* Technology Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">
              Technology
            </label>
            <div className="relative">
              <select
                value={selectedTechnology}
                onChange={(e) => onTechnologyChange(e?.target?.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer"
              >
                {technologies?.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
              <Icon 
                name="ChevronDown" 
                size={16} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" 
              />
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="flex items-end">
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
              iconSize={14}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={16} className="text-text-secondary" />
            <span className="text-sm text-text-secondary">Active filters:</span>
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== 'All' && (
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                  {selectedCategory}
                </span>
              )}
              {selectedTechnology !== 'All' && (
                <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">
                  {selectedTechnology}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;
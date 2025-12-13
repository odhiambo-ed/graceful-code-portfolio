import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export interface ProgramDetails {
  name: string;
  price: string;
  duration: string;
}

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  programDetails: ProgramDetails;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ 
  isOpen, 
  onClose, 
  programDetails 
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSubmit.co service
      const response = await fetch('https://formsubmit.co/odhiamboedward.ouma@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          program: programDetails.name,
          price: programDetails.price,
          duration: programDetails.duration,
          _subject: `New Enrollment: ${programDetails.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Enrollment submitted!",
          description: "We've received your enrollment request. We'll contact you soon.",
          duration: 5000,
        });
        onClose();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Secure Your Spot</DialogTitle>
          <DialogDescription>
            Complete the form below to enroll in {programDetails.name}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="bg-muted/50 p-4 rounded-md mb-4">
            <h4 className="font-medium">Program Details</h4>
            <p><strong>Program:</strong> {programDetails.name}</p>
            <p><strong>Price:</strong> {programDetails.price}</p>
            <p><strong>Duration:</strong> {programDetails.duration}</p>
          </div>
          
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
              />
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
              />
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="message">Additional Information (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any specific questions or requirements?"
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentModal;
